import { useStateProvider } from "@/context/StateContext";
import { ADD_AUDIO_MESSAGE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  FaMicrophone,
  FaPauseCircle,
  FaPlay,
  FaStop,
  FaTrash,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import WaveSurfer from "wavesurfer.js";

function CaptureAudio({ hide }) {
  const [{ userInfo, currentChatUser, socket }, dispatch] = useStateProvider();

  const [isRecording, setIsRecording] = useState(false);
  const [recorderAudio, setRecorderAudio] = useState(null);
  const [waveFrom, setwaveFrom] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isplaying, setIsplaying] = useState(false);
  const [renderedAudio, setrenderedAudio] = useState(null);

  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const waveFormRef = useRef(null);

  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingDuration((prevDuration) => {
          setTotalDuration(prevDuration + 1);
          return prevDuration + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRecording]);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveFormRef.current,
      waveColor: "#ccc",
      progressColor: "#4a9eff",
      cursorColor: "#7ae3c3",
      barWidth: 2,
      height: 30,
      responsive: true,
    });
    setwaveFrom(wavesurfer);

    wavesurfer.on("finish", () => {
      setIsplaying(false);
    });

    return () => {
      wavesurfer.destroy();
    };
  }, []);

  useEffect(() => {
    if (waveFrom) handleStartRecording();
  }, [waveFrom]);

  const handleStartRecording = () => {
    setRecordingDuration(0);
    setCurrentPlaybackTime(0);
    setTotalDuration(0);
    setIsRecording(true);
    setRecorderAudio(null);
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioRef.current.srcObject = stream;

        const chunks = [];
        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          const audioURL = URL.createObjectURL(blob);
          const audio = new Audio(audioURL);
          setRecorderAudio(audio);
          waveFrom.load(audioURL);
        };
        mediaRecorder.start();
      })
      .catch((error) => {
        console.error("Error accessing microphone", error);
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      waveFrom.stop();

      const audioChunks = [];
      mediaRecorderRef.current.addEventListener("dataavailable", (event) => {
        audioChunks.push(event.data);
      }),
        mediaRecorderRef.current.addEventListener("stop", () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
          const audioFile = new File([audioBlob], "Recording.mp3");
          setrenderedAudio(audioFile);
        });
    }
  };

  useEffect(() => {
    if (recorderAudio) {
      const updatePlayBackTime = () => {
        setCurrentPlaybackTime(recorderAudio.currentTime);
      };
      recorderAudio.addEventListener("timeUpdate", updatePlayBackTime);
      return () => {
        recorderAudio.removeEventListener("timeUpdate", updatePlayBackTime);
      };
    }
  }, [recorderAudio]);

  const handlePlayRecording = () => {
    if (recorderAudio) {
      waveFrom.stop();
      waveFrom.play();
      recorderAudio.play();
      setIsplaying(true);
    }
  };

  const handlePauseRecording = () => {
    waveFrom.stop();
    recorderAudio.push();
    setIsplaying(false);
  };

  const sendRecording = async () => {
    try {
      const fromData = new FormData();
      fromData.append("audio", renderedAudio);
      const responce = await axios.post(ADD_AUDIO_MESSAGE, fromData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          from: userInfo.id,
          to: currentChatUser.id,
        },
      });
      if (responce.status === 201) {
        socket.current.emit("send-msg", {
          to: currentChatUser?.id,
          from: userInfo?.id,
          message: responce.data.message,
        });
        dispatch({
          type: reducerCases.ADD_MESSAGE,
          newMessage: {
            ...responce.data.message,
          },
          fromSelf: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex text-2xl w-full justify-end items-center">
      <div className="pt-1">
        <FaTrash
          className="text-panel-header-icon cursor-pointer"
          onClick={() => hide()}
        />
      </div>
      <div className="mx-4 py-2 px-4 text-white text-lg flex gap-3 justify-center items-center bg-search-input-container-background rounded-full drop-shadow-lg">
        {isRecording ? (
          <div className="text-red-500 animate-pulse w-60 text-center">
            Recording <span>{recordingDuration}</span>
          </div>
        ) : (
          <div>
            {recorderAudio && (
              <>
                {!isplaying ? (
                  <FaPlay onClick={handlePlayRecording} />
                ) : (
                  <FaStop onClick={handlePauseRecording} />
                )}
              </>
            )}
          </div>
        )}
        <div className="w-60" ref={waveFormRef} hidden={isRecording} />
        {recorderAudio && isplaying && (
          <span>{formatTime(currentPlaybackTime)}</span>
        )}
        {recorderAudio && !isplaying && (
          <span>{formatTime(totalDuration)}</span>
        )}
        <audio ref={audioRef} hidden />
      </div>
      <div className="mr-4">
        {!isRecording ? (
          <FaMicrophone
            className="text-red-500 cursor-pointer"
            onClick={handleStartRecording}
          />
        ) : (
          <FaPauseCircle
            className="text-red-500 cursor-pointer"
            onClick={handleStopRecording}
          />
        )}
      </div>
      <div>
        <MdSend
          className="text-panel-header-icon cursor-pointer mr-4"
          title="Send"
          onClick={sendRecording}
        />
      </div>
    </div>
  );
}

export default CaptureAudio;
