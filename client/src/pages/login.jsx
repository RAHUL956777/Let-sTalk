import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";

function login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email: email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);

    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        console.log({ data });
      }
    } catch (error) {
      console.log(`error while checking email`, error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="Let'sTalk" height={250} width={250} />
        <span className="text-6xl">Let'sTalk</span>
      </div>
      <button
        className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
        onClick={handleLogin}
      >
        <FcGoogle className="text-3xl" />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  );
}

export default login;
