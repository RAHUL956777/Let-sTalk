import React from "react";
import { Box, Typography, styled, Divider } from "@mui/material";
import { emptyChatImage } from "../../constants/data";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100vh;
`;
const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  width: 400,
  marginTop: 100,
});

const Title = styled(Typography)`
  font-size: 32px;
  margin: 25px 0 10px 0;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;
const StyleDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

const DataEncryption = styled(Box)`
  display: flex;
  margin: 80px 0 0 200px;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={emptyChatImage} alt="image" />
        <Title>WhatsApp Web</Title>
        <SubTitle>
          Now send and resolve message without keeping your phone online.
        </SubTitle>
        <SubTitle>
          use Whatsapp on Upto 4 linked devices and 1 phone at the same time.
        </SubTitle>
        <StyleDivider />

        <DataEncryption>
          <LockOutlinedIcon style={{ color: "#41525d", fontSize: "20px" }} />
          <SubTitle>end to end data encryption</SubTitle>
        </DataEncryption>
      </Container>
    </Component>
  );
};

export default EmptyChat;
