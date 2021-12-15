import React, { useState, useEffect } from "react";
// Componentes Material UI
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
import { Hidden } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
// Iconos
import { DiHtml5 } from "@react-icons/all-files/di/DiHtml5";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { DiJavascript1 } from "@react-icons/all-files/di/DiJavascript1";
import { DiReact } from "@react-icons/all-files/di/DiReact";
// import { SiBootstrap } from "@react-icons/all-files/si/SiBootstrap";

// Fondo
import backgroundImage from "../images/portfolioCodingImage_2.jpeg";
// Componentes locales
import Social from "./Social";

// Styles
const useStyles = makeStyles((theme) => ({
  section: {
    height: "85vh",
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
}));

// Items Frontend
const TechnologyItems = [
  { icon: <DiHtml5 title="HTML 5" /> },
  { icon: <DiCss3 title="CSS 3" /> },
  { icon: <DiJavascript1 title="JavaScript" /> },
  { icon: <DiReact title="React" /> },
];

const HeroSection = () => {
  const styles = useStyles();

  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(true);
  }, []);
    
    

  return (
    <>
      <StaticImage
        className={styles.heroImage}
        src="../images/portfolioCodingImage_2.jpeg"
      />
      <Paper className={styles.section}>
        {/* Revisar esta parte porque no me convence mucho la imagen*/}
        <Container className={styles.container} maxWidth="md">
          <Grid
            container
            className={styles.contend}
            alignItems="center"
            justifyContent="space-between"
            style={{ minHeight: "50vh" }}
          >
            <Grow in={shouldShow}>
              <Grid item className={styles.backDrop} sm={9}>
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
            <Hidden xsDown>
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
    </>
  );
};

export default HeroSection;
