import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

import HeaderMenu from "./HeaderMenu";
import Infodrawer from "../../drawer/Infodrawer";
const ComponentBox = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 10px;
    color: #000;
    cursor: pointer;
  }

  & :first-of-type {
    font-size: 25px;
    margin-right: 8px;
    margin-top: 3px;
  }

  & :nth-of-type(2) {
    font-size: 23px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "80%",
  cursor: "pointer",
});

const Header = () => {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <ComponentBox component="div">
        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
        <Wrapper>
          <HistoryToggleOffIcon />
          <ChatIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </ComponentBox>
      <Infodrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
