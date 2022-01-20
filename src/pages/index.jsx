import React from "react";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseLine";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Projects from "../components/Projects";

let darkTheme = createTheme({
  palette: {
    type: "dark",
  },

});

darkTheme = responsiveFontSizes(darkTheme)

function indexPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseLine />
      <Header />
      <HeroSection />
      <Projects />
    </ThemeProvider>
  );
}

export default indexPage;
