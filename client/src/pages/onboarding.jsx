import React, { useState,useEffect } from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import Input from "@/components/common/Input";
import Avatar from "@/components/common/Avatar";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import axios from "axios";

function onboarding() {
  const router = useRouter();

  const [{ userInfo,newUser },dispatch] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");

  useEffect(() => {
    if(!newUser && !userInfo?.email) router.push("/login");
    else if(!newUser && userInfo?.email) router.push("/")
  }, [newUser,userInfo,router])

  const onBoardUserHandler = async () => {
    if (validateDetails()) {
      const email = userInfo.email;
      try {
        const { data } = await axios.post(ONBOARD_USER_ROUTE, {
          email,
          name,
          about,
          image,
        });
        if (data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              id:data.user.id,
              name,
              email,
              profileImage: image,
              status: about,
            },
          });
          router.push("/")
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateDetails = () => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };

  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center gap-2">
        <Image src="/whatsapp.gif" alt=":et'sTalk" height={250} width={250} />
        <span className="text-5xl">Let'sTalk</span>
      </div>
      <h2 className="text-2xl">Create your profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6">
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div className="flex justify-center items-center">
            <button
              onClick={onBoardUserHandler}
              className="flex items-center justify-center gap-7 bg-search-input-container-background p-4 rounded-lg hover: hover:bg-gray-800  shadow-lg hover:shadow-cyan-500/50"
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
