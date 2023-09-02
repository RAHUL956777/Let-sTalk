import { useStateProvider } from "@/context/StateContext";
import React, { useRef, useState } from "react";
import { FaMicrophone, FaPauseCircle, FaPlay, FaTrash } from "react-icons/fa";
import { MdSend } from "react-icons/md";

function CaptureAudio({ hide }) {
  const [{ userInfo, currentChatUser, socket }, dispacth] = useStateProvider();

  const [isRecording, setIsRecording] = useState(false);
  const [recorderAudio, setRecorderAudio] = useState(null);
  const [waveFrom, setwaveFrom] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isplaying, setIsplaying] = useState(false);

  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const waveFormRef = useRef(null);

  const handlePlayRecording = () => {};

  const handlePauseRecording = () => {};

  const handleStartRecording = () => {};

  const handleStopRecording = () => {};

  const sendRecording = async () => {};

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
    </div>
  );
}

export default CaptureAudio;
