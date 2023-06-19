import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../../service/api";
import { Box, styled, Divider } from "@mui/material";
import Converse from "./Converse";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyleDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Conversations = () => {
  const [users, setUsers] = useState([]);

  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fecthData = async () => {
      let responce = await getUsers();
      setUsers(responce);
    };
    fecthData();
  }, []);

  return (
    <Component>
      {users.map((user) => {
        return (
          user.sub !== account.sub && (
            <>
              <Converse user={user} />
              <StyleDivider />
            </>
          )
        );
      })}
    </Component>
  );
};

export default Conversations;
