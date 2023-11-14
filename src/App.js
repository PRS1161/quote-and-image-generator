import { Container, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import ImageGenerator from "./components/ImageGenerator";
import QuoteGenerator from "./components/QuoteGenerator";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          minWidth: 0,
        },
      },
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={12}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/image" element={<ImageGenerator />} />
                <Route path="/quote" element={<QuoteGenerator />} />
              </Routes>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
