import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import React from "react";
import { qrCodeImage } from "../../components/constants/data";
import SettingsSuggestTwoToneIcon from "@mui/icons-material/SettingsSuggestTwoTone";
import { GoogleLogin } from "@react-oauth/google";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import jwt_decode from "jwt-decode";

const Component = styled(Box)`
  display: flex;
`;

const QRCode = styled("img")({
  height: 264,
  width: 264,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: 4a4a4a;
  }
`;

const Type = styled(Typography)`
  color: black;
  font-weight: 530;
  font-family: inherit;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 18px;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const dialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maximumHeight: "100%",
  boxShadow: "none",
  overFlow: "hidden",
};

const LoginDialog = () => {
  const onLoginSuccess = (res) => {
    console.log("Login successfull");
    const decoded = jwt_decode(res.credential);
    console.log(decoded);
  };

  const onLoginError = (res) => {
    console.log("You get some error while login", res);
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
      <Component>
        <Container>
          <Title>Use WhatsApp on your computer: </Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>
              2. Tap <Type>Menu</Type> <MoreVertIcon /> or{" "}
              <Type> Setting </Type>
              <SettingsSuggestTwoToneIcon />
              <Type>and</Type> select
              <Type>Linked Devices</Type>
            </ListItem>
            <ListItem>
              3. Tap on <Type>Link a device</Type>
            </ListItem>
            <ListItem>
              4. Point your phone to this screen to capture the QR code
            </ListItem>
          </StyledList>
        </Container>
        <Box style={{ position: "relative" }}>
          <QRCode src={qrCodeImage} alt="qr-code" />
          <Box
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateX(25%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
