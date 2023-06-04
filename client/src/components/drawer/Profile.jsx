import React from "react";
import { Box, Typography, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Image = styled("img")({
  width: 200,
  height: 200,
  borderRadius: "50%",
  padding: "25px 0",
});

const BoxWrapper = styled(Box)`
  background: #ffffff;
  padding: 12px 30px 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const StyledTypography1 = styled(Typography)`
  font-size: 13px;
  color: #009688;
  font-weight: 200;
`;

const StyledTypography2 = styled(Typography)`
  font-size: 16px;
  color: #4a4a4a;
  font-weight: 400;
`;

const DescriptionContainer = styled(Box)`
  padding: 15px 20px 28px 30px;

  & > p {
    font-size: 15px;
    color: #8696a0;
  }
`;

const Profile = () => {
  const { account } = useContext(AccountContext);

  return (
    <>
      <ImageContainer>
        <Image src={account.picture} alt="dp" />
      </ImageContainer>

      <BoxWrapper>
        <StyledTypography1>Your name</StyledTypography1>
        <StyledTypography2>{account.name}</StyledTypography2>
      </BoxWrapper>

      <DescriptionContainer>
        <Typography>
          This is not your username or pin. This name will be visible to your
          whatsApp contacts
        </Typography>
      </DescriptionContainer>

      <BoxWrapper>
        <StyledTypography1>About</StyledTypography1>
        <StyledTypography2>Eat! Sleep! Code! Repeat! 👈✌️</StyledTypography2>
      </BoxWrapper>
    </>
  );
};

export default Profile;
