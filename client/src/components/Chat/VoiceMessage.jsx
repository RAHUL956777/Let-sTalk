import { useStateProvider } from "@/context/StateContext";
import { HOST } from "@/utils/ApiRoutes";
import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Avatar from "../common/Avatar";
import { FaPause, FaPlay } from "react-icons/fa";
import { calculateTime } from "@/utils/CalculateTime";
import MessageStatus from "../common/MessageStatus";

function VoiceMessage({ message }) {
  const [{ currentChatUser, userInfo }] = useStateProvider();
  const [audioMessage, setAudioMessage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const waveFormRef = useRef(null);
  const waveFrom = useRef(null);

  useEffect(() => {
    if (waveFrom.current === null) {
      waveFrom.current = WaveSurfer.create({
        container: waveFormRef.current,
        waveColor: "#ccc",
        progressColor: "#4a9eff",
        cursorColor: "#7ae3c3",
        barWidth: 2,
        height: 30,
        responsive: true,
      });

      waveFrom.current.on("finish", () => {
        setIsPlaying(false);
      });
    }

    return () => {
      waveFrom.current.destroy();
    };
  }, []);

  useEffect(() => {
    const audioURL = `${HOST}/${message.message}`;
    const audio = new Audio(audioURL);
    setAudioMessage(audio);
    waveFrom.current.load(audioURL);
    waveFrom.current.on("ready", () => {
      setTotalDuration(waveFrom.current.getDuration());
    });
  }, [message.message]);

  useEffect(() => {
    if (audioMessage) {
      const updatePlayBackTime = () => {
        setCurrentPlaybackTime(audioMessage.currentTime);
      };
      audioMessage.addEventListener("timeUpdate", updatePlayBackTime);
      return () => {
        audioMessage.removeEventListener("timeUpdate", updatePlayBackTime);
      };
    }
  }, [audioMessage]);

  const handlePlayAudio = () => {
    if (audio) {
      waveFrom.current.stop();
      waveFrom.current.play();
      audioMessage.play();
      setIsPlaying(true);
    }
  };

  const handlePauseAudio = () => {
    waveFrom.current.stop();
    audioMessage.push();
    setIsPlaying(false);
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
    <div
      className={`flex items-center gap-5 text-white px-4 text-sm rounded-md ${
        message.senderId === currentChatUser.id
          ? "bg-incoming-background"
          : "bg-outgoing-background"
      }`}
    >
      <div>
        <Avatar type="lg" image={currentChatUser?.profilePicture} />
        <div className="cursor-pointer text-xl">
          {!isPlaying ? (
            <FaPlay onClick={handlePlayAudio} />
          ) : (
            <FaPause onClick={handlePauseAudio} />
          )}
        </div>
        <div className="relative">
          <div className="w-60" ref={waveFormRef} />
          <div className="text-bubble-meta text-[11px] pt-1 flex justify-between absolute bottom-[-22px] w-full">
            <span>
              {formatTime(isPlaying ? currentPlaybackTime : totalDuration)}
            </span>
            <div className="flex gap-1">
              <span>{calculateTime(message.createdAt)}</span>
              {message.senderId === userInfo.id && (
                <MessageStatus messageStatus={message.messageStatus} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceMessage;
