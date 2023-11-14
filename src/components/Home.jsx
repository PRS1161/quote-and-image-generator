import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getButtonBackAndFontColor } from "../utils/common";

const Home = () => {
  const { backgroundColor, color } = getButtonBackAndFontColor();
  const navigate = useNavigate();

  const handleOnClick = (type) => {
    navigate(type === "image" ? "image" : "quote");
  };

  return (
    <>
      <ButtonGroup
        variant="contained"
        size="large"
        style={{ borderRadius: 25 }}
      >
        <Button
          style={{ backgroundColor, color }}
          onClick={() => handleOnClick("image")}
        >
          Image
        </Button>
        <Button
          style={{ backgroundColor, color }}
          onClick={() => handleOnClick("quote")}
        >
          Quote
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Home;
