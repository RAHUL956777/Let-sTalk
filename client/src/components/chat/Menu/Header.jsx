import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
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
      <Component>
        <Image src={account.picture} alt="Picture" />
        <Box>
          <ChatIcon />
          <MoreVertIcon />
        </Box>
      </Component>
    </>
  );
};

export default Header;
