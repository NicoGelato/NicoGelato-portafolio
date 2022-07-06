import React from "react";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Helmet from "react-helmet";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import Projects from "../components/Projects";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

darkTheme = responsiveFontSizes(darkTheme);

function indexPage() {
  return (
    <StyledEngineProvider injectFirst>
      <Helmet>
        <title>Nico Gelato - Portafolio</title>
        <meta property="og:title" content="Nico Gelato - Portafolio" />
        <meta property="og:site_name" content="Nico Gelato - Portafolio" />
        <meta
          name="description"
          content="Portafolio de desarrollo web de Nico Gelato"
        />
        <meta
          property="og:description"
          content="Portafolio de desarrollo web de Nico Gelato"
        />
        <meta
          name="keywords"
          content="React, Javascript, Node, Python, Css, Html, Gatsby, Bootstrap, Material ui, Wordpress, Frontend, Backend, Desarrollo, Web, Portafolio, Nico Gelato, Portfolio, Developer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:locale:alternate" content="es_LA" />
        <meta property="og:url" content="http://nicogelato.gatsbyjs.io" />
        <link rel="canonical" href="http://nicogelato.gatsbyjs.io" />
      </Helmet>
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
