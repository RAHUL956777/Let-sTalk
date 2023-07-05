import React, { useEffect, useState, useContext } from "react";
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

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);
  const { account } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getUsers();
      const filteredData = response.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };
    fetchData();
  }, [text]);

  return (
    <Component>
      {users.map((user) => {
        return (
          user.sub !== account.sub && (
            <React.Fragment key={user.id}>
              <Converse user={user} />
              <StyleDivider />
            </React.Fragment>
          )
        );
      })}
    </Component>
  );
};

export default Conversations;
