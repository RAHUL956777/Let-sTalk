import React from "react";
import { Box, styled, } from "@mui/material";
import Footer from "./Footer";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size:
`;

const Component = styled(Box)`
  height: 75vh;
  overflow-y: scroll;
`;

const Messages = () => {
  return (
    <Wrapper>
      <Component>

      </Component>
      <Footer />
    </Wrapper>
  );
};

export default Messages;
