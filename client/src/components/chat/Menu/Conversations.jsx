import { useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import { Box } from "@mui/material";
import Conversation from "./Conversation";

const Conversations = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      let responce = await getUsers();
      setUsers(responce);
    };
    fecthData();
  }, []);

  return (
    <Box>
      {
        users.map(user=>{
          <Conversation />
        })
      }
    </Box>
  )
};

export default Conversations;
