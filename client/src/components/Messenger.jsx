import React, { useContext } from "react";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import { AccountContext } from "../context/AccountProvider";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const LoginHeader = styled(AppBar)`
  height: 220px;
  background-color: #00a884;
  box-shadow: none;
`;

const Header = styled(AppBar)`
  height: 125px;
  background-color: #60d394;
  box-shadow: none;
`;

const Logo = styled("img")`
  height: 40px;
  margin-left: 18%;
`;

const Title = styled(Typography)`
  color: #fff;
  font-size: 15px;
  font-weight: 100;
  padding: 5px;
`;

const Messenger = () => {
  const { account } = useContext(AccountContext);

  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar>
              <Logo src="./image/whatsapp.png" alt="Logo" />
              <Title>WHATSAPP WEB</Title>
            </Toolbar>
          </LoginHeader>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
