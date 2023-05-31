import React from "react";
import { Drawer, Box, Typography, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Profile from "./Profile";

const drawerStyle = {
  left: 20,
  top: 31,
  height: "91.7%",
  width: "29.2%",
  boxShadow: "none",
};

const Header = styled(Box)`
  display: flex;
  background-color: #57cc99;
  height: 92px;
  color: #ffffff;

  & > svg,
  & > p {
    margin-top: auto;
    padding: 15px;
    fone-weight: 600;
  }
`;

const Text = styled(Typography)`
  font-style: 16px;
`;

const Component = styled(Box)`
  background: #ededed;
  height: 85%;
`;

const Infodrawer = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: drawerStyle }}
      style={{ zIndex: 1500 }}
    >
      <Header>
        <ArrowBackIcon
          onClick={() => setOpen(false)}
          style={{ cursor: "pointer" }}
        />
        <Text>Profile</Text>
      </Header>
      <Component>
        <Profile />
      </Component>
    </Drawer>
  );
};

export default Infodrawer;
