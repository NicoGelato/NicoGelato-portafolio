import React from "react";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Projects from "../components/Projects";


let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

darkTheme = responsiveFontSizes(darkTheme)

function indexPage() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <HeroSection />
        <Projects />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default indexPage;
