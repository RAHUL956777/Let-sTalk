import React, { useContext, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

import HeaderMenu from "./HeaderMenu";
import Infodrawer from "../../drawer/Infodrawer";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;
  align-item: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  & > * {
    margin-left: 2px;
    padding: 10px;
    color: #000;
    cursor: pointer;
  }

  & :rst-of-type {
    font-size: 25px;
    margin-right: 8px;
    margin-top: 3px;
  }

  & :second-child {
    font-size: 23px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "80%",
  cursor: 'pointer',
});

const Header = () => {
  const { account } = useContext(AccountContext);
  const [openDrawer, setOpenDrawre] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawre(true);
  };

  return (
    <>
      <Component Component>
        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
        <Wrapper>
          <HistoryToggleOffIcon />
          <ChatIcon />
          <HeaderMenu  setOpenDrawre={setOpenDrawre}/>
        </Wrapper>
      </Component>
      <Infodrawer open={openDrawer} setOpen={setOpenDrawre} />
    </>
  );
};

export default Header;
