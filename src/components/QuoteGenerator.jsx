import { Replay } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { cardBackgroundColor } from "../utils/common";

const QuoteGenerator = () => {
  const [data, setData] = useState(null);
  const [bgColor, setBgColor] = useState(cardBackgroundColor());

  const handleOnClick = () => {
    setBgColor(cardBackgroundColor());
    generateRandomQuote();
  };

  const generateRandomQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const { content, author } = await response.json();
    setData({ content, author });
  };

  useEffect(() => {
    generateRandomQuote();
  }, []);

  return (
    <>
      {data && (
        <Card
          style={{
            display: "flex",
            padding: "2",
            borderRadius: 16,
            backgroundColor: bgColor,
          }}
          elevation={15}
        >
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ fontSize: 20 }}>{data.content}</p>
            <Divider style={{ margin: "1, 0" }} />
            <Box mb={1}>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  letterSpacing: "0.5px",
                  marginBottom: 0,
                }}
              >
                {data.author}
              </h3>
            </Box>
            <div style={{ marginLeft: "auto" }}>
              <Fab aria-label="replay" onClick={handleOnClick}>
                <Replay />
              </Fab>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default QuoteGenerator;
