import React, { useContext } from "react";
import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";

const ChatBox = () => {
  const { person } = useContext(AccountContext);

  return (
    <Box style={{height:'75%'}}>
      <ChatHeader person={person}/>
      <Messages person={person}/>
    </Box>
  );
};

export default ChatBox;
