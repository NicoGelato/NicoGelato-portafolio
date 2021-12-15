import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseLine from "@material-ui/core/CssBaseLine";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";


const darkTheme = createTheme({
  palette: {
    type: "dark",
  },
});

function indexPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseLine /> 
      <Header />
      <HeroSection />
    </ThemeProvider>
  );
}

export default indexPage;
