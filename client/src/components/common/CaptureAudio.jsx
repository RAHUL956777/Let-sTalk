import React, { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";

function CaptureAudio({ hide }) {
  const [isRecording, setIsRecording] = useState(false);
  const [recorderAudio, setRecorderAudio] = useState(null);
  const [waveFrom, setwaveFrom] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const audioRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const waveFromRef = useRef(null)

  return (
    <div className="flex text-2xl w-full justify-end items-center">
      <div className="pt-1">
        <FaTrash
          className="text-panel-header-icon cursor-pointer"
          onClick={() => hide()}
        />
      </div>
      <div className="mx-4 my-2 px-4 text-white text-lg flex gap-3 justify-center items-center bg-search-input-container-background rounded-full drop-shadow-lg">
        {isRecording ? (
          <div className="text-red-500 animate-pulse w-60 text-center">
            Recording
          </div>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
}

export default CaptureAudio;
