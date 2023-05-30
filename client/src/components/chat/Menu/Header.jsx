import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

import HeaderMenu from "./HeaderMenu";

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
  }

  & :first-child {
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
});

const Header = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <Component Component>
        <Image src={account.picture} alt="Picture" />
        <Wrapper>
          <HistoryToggleOffIcon />
          <ChatIcon />
          <HeaderMenu />
        </Wrapper>
      </Component>
    </>
  );
};

export default Header;
