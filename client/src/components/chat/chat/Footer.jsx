import { Box, styled, InputBase } from "@mui/material";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 18px;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  height: 20px;
  padding-left: 25px;
  font-size: 14px;
`;

const ClipIcon = styled(AttachFileIcon)`
  transform: rotate(40deg);
`;

const Footer = ({value, sendText,setValue }) => {

  return (
    <Container>
      <TagFacesOutlinedIcon />
      <ClipIcon />
      <Search>
        <InputField
          placeholder="Type a message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </Search>
      <MicIcon />
    </Container>
  );
};

export default Footer;
