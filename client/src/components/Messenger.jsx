import React from "react";
import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import LoginDialog from "./account/LoginDialog";

const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

const Header = styled(AppBar)`
  height: 220px;
  background-color: #128c7e;
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
  return (
    <Component>
      <Header>
        <Toolbar>
          <Logo src="./image/whatsapp.png" alt="Logo" />
          <Title>WHATSAPP WEB</Title>
        </Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
