import React from "react";
import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
  objectFit: "cover",
});

const Converse = ({ user }) => {
  return (
    <Component>
      <Box>
        <Image src={user.picture} alt="image" />
      </Box>
      <Box>
        <Box>
          <Typography>{user.name}</Typography>
        </Box>
      </Box>
    </Component>
  );
};

export default Converse;
