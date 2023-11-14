import { Paper, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import defaultImage from "../assets/images/default.jpeg";

const ResponsiveImage = styled("img")({
  width: "100%",
  height: "auto",
  "@media (min-width: 600px)": {
    maxWidth: "400px",
  },
});
const ImageGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState(defaultImage);

  const handleOnClick = async (event) => {
    if (event.key === "Enter" && prompt !== "") {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_KEY}`,
          },
          body: JSON.stringify({
            model: "dall-e-2",
            prompt,
            n: 1,
            size: "512x512",
          }),
        }
      );

      if (response && response.status === 200) {
        const {
          data: [{ url }],
        } = await response.json();

        setImageUrl(url);
      }
      setPrompt("");
    }
  };
  return (
    <>
      <Paper
        elevation={3}
        style={{
          padding: "10px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <ResponsiveImage src={imageUrl} alt="Image" />
        </div>
      </Paper>
      <TextField
        label="Enter Prompt"
        fullWidth
        variant="outlined"
        margin="normal"
        value={prompt}
        required={true}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleOnClick}
      />
    </>
  );
};

export default ImageGenerator;
