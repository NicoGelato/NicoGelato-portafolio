import React, { useState, useEffect } from "react";
import makeStyles from '@mui/styles/makeStyles';
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import { Hidden } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
// Iconos
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { DiReact } from "@react-icons/all-files/di/DiReact";
// Fondo
import backgroundImage from "../images/imageHeroSection.jpg";
// Componentes locales
import Social from "./Social";

// Styles
const useStyles = makeStyles(
  
    {
      section: {
        height: "85vh",
        position: "relative",
      },
      container: {
        height: "100%",
      },
      contend: {
        height: "100%",
      },
      backDrop: {
        backdropFilter: "blur(3px)",
        backgroundColor: "rgba(0,0,10,0.3)",
        padding: "9vh",
        borderRadius: "3px",
      },

      // Revisar esta parte porque no me convence mucho
      heroImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      },
    },
    { index: 1 }
  
);

// Items Frontend
const TechnologyItems = [
  { icon: <DiHtml5 key="HTML" title="HTML 5" /> },
  { icon: <DiCss3 key="CSS" title="CSS 3" /> },
  { icon: <DiJavascript1 key="JavaScript" title="JavaScript" /> },
  { icon: <DiReact key="React" title="React" /> },
];

const HeroSection = () => {
  const classes = useStyles();

  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(true);
  }, []);

  return (
    <Paper className={classes.section}>
      <StaticImage
        className={classes.heroImage}
        src="../images/imageHeroSection.jpg"
        alt="Netbook con codigo"
      />
      <Container className={classes.container} maxWidth="md">
        <Grid
          container
          className={classes.contend}
          alignItems="center"
          justifyContent="space-between"
          style={{ minHeight: "50vh" }}
        >
          <Grow in={shouldShow}>
            <Grid item className={classes.backDrop} sm={9}>
              <Box my={1}>
                <Typography componet="h1" variant="h3">
                  Nicolás Gelato
                </Typography>
              </Box>
              <Typography componet="h2" variant="h5">
                Programador Frontend
              </Typography>
              <Box my={1}>
                <Typography componet="h2" variant="h6">
                  {TechnologyItems.map((item) => item.icon)}
                </Typography>
              </Box>

              <Box my={1}>
                <Button
                  href="mailto:nicolasgelato@gmail.com?Subject=Estoy%20interesado%20en%20sus%20servicios%20como%20desarrollador&body=Hola%20Nico!"
                  variant="outlined"
                  color="primary"
                >
                  Contactame
                </Button>
              </Box>
            </Grid>
          </Grow>
          <Hidden smDown>
            <Grid item>
              <Social direction="column" />
            </Grid>
          </Hidden>
          <Hidden smUp>
            <Grid item>
              <Social direction="row" />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
};

export default HeroSection;
