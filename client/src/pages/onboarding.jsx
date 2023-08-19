import React from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";

function onboarding() {
  const [{ userInfo }] = useStateProvider();
  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <Image src="/whatsapp.gif" alt=":et'sTalk" height={250} width={250} />
        <span className="text-5xl">Let'sTalk</span>
      </div>
      <h2 className="text-2xl">Create your profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          {userInfo.name}
        </div>
      </div>
    </div>
  );
}

export default onboarding;
