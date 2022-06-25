import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SettingsIcon from "@mui/icons-material/Settings";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Hidden from "@mui/material/Hidden";
import makeStyles from "@mui/styles/makeStyles";
// Imagenes Proyectos
import leedsPortada from "../images/leedsPortada.png";
import otraCosaPortada from "../images/otraCosaPortada.jpg";
import plakatPortada from "../images/plakatPortada.jpg";

const useStyles = makeStyles(
  {
    card: {
      display: "flex",
      marginLeft: "auto",
      marginBottom: 20,
    },
    cardMedia: {
      width: "75%",
      opacity: "0.7",
    },
    link: {
      marginRight: "auto",
    },
    tag: {
      // marginRight: 5,
      // marginBottom: 5,
    },
    statusOfProject: {
      color: "#06C400",
    },
  },
  { index: 1 }
);

const TagsContainer = ({ tags }) => {
  const styles = useStyles();

  return (
    <Grid container spacing={2}>
      {tags.map((tag) => (
        <Grid item key={tag}>
          <Chip
            className={styles.tag}
            label={tag}
            variant="outlined"
            // key={tag}
          ></Chip>
        </Grid>
      ))}
    </Grid>
  );
};

const Project = ({
  title,
  description,
  statusOfProject,
  imageUrl,
  imageAlt,
  tags,
  links,
}) => {
  const styles = useStyles();
  return (
    <Grid item>
      <Card className={styles.card}>
        <Grid md={10}>
          <CardContent>
            {statusOfProject === "Construyendo" && (
              <Typography
                className={styles.statusOfProject}
                variant="subtitle2"
              >
                {statusOfProject}
                <SettingsIcon
                  className={styles.statusOfProject}
                  fontSize="small"
                />
              </Typography>
            )}
            <Typography variant="h5" paragraph>
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>

            <Hidden mdUp>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardContent>
          <CardActions>
            <div className={styles.link}>
              {links.map((linkItem) => (
                <IconButton
                  key={linkItem.href}
                  href={linkItem.href}
                  title={linkItem.title}
                  target="_blank"
                  size="large"
                >
                  {" "}
                  <linkItem.icon />
                </IconButton>
              ))}
            </div>
            <Hidden mdDown>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardActions>
        </Grid>

        <Hidden smDown>
          <CardMedia
            className={styles.cardMedia}
            image={imageUrl}
            alt={imageAlt}
          ></CardMedia>
        </Hidden>
      </Card>
    </Grid>
  );
};

const projectsData = [
  {
    title: "Ecommerce: Indumentarias Leeds",
    description:
      "Ecommerce para venta de ropa, desarrollado utilizando React, Bootstrap y Firebase como plataforma de base de datos",
    statusOfProject: "Construyendo",
    imageUrl: `${leedsPortada}`,
    imageAlt: "Ecommerce de Indumentarias Leeds",
    tags: ["React.js", "Css", "Bootstrap", "NodeJs", "Firebase 9"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/NicoGelato/coderHouse-React-Gelato",
        title: "Ver código",
      },
      {
        icon: OpenInNewIcon,
        href: "https://leedsindumentaria.netlify.app/",
        title: "Ir a la página",
      },
    ],
  },
  {
    title: "Página web: Otra Cosa",
    description:
      "Pagina de la banda de rock 'Otra Cosa', desarrollada utilizando React, GatsbyJS, Material ui y conexion con Google API's",
    statusOfProject: "Construyendo",
    imageUrl: `${otraCosaPortada}`,
    imageAlt: "Pagina de la banda de rock Otra Cosa",
    tags: ["React.js", "Gatsby.js", "Material UI", "NodeJs", "Google API's"],
    links: [
      {
        icon: GitHubIcon,
        href: "https://github.com/NicoGelato/otraCosa",
        title: "Ver código",
      },
      {
        icon: OpenInNewIcon,
        href: "https://otracosa.gatsbyjs.io/",
        title: "Ir a la página",
      },
    ],
  },
  {
    title: "Mantenimiento de página web: Plakat",
    description:
      "Mantenimiento de la página web de 'Plakat Gráfica', desarrollada, por terceros, en Wordpress",
    statusOfProject: "Mantenimiento",
    imageUrl: `${plakatPortada}`,
    imageAlt: "Pagina de Plakat, empresa de ploteos y carteleria",
    tags: ["Wordpress"],
    links: [
      {
        icon: OpenInNewIcon,
        href: "https://www.plakatgrafica.com/",
        title: "Ir a la página",
      },
    ],
  },
];

const Projects = () => {
  return (
    <>
      <Container maxWidth="md" id="Proyectos">
        <Box pt={6} mb={2}>
          <Typography variant="h4">Proyectos</Typography>
        </Box>
        <Grid container direction="column" spacing={4}>
          {projectsData.map((data) => (
            <Project {...data} key={data.title} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
