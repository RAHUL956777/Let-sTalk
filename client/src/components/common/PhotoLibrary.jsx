import React from "react";
import { IoClose } from "react-icons/io5";

function PhotoLibrary({setPhoto , hidePhotoLibary}) {
  const images = [
    "/avatars/1.png",
    "/avatars/2.png",
    "/avatars/3.png",
    "/avatars/4.png",
    "/avatars/5.png",
    "/avatars/6.png",
    "/avatars/7.png",
    "/avatars/8.png",
    "/avatars/9.png",
  ];
  return (
    <div className="fixed top-0 left-0 max-h-[100vh] max-w[100vw] h-full w-full flex justify-center items-center">
      <div className="h-max w-max bg-gray-900 gap-6 rounded-lg p-4">
        <div onClick={hidePhotoLibary} className="pt-2">
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default PhotoLibrary;
