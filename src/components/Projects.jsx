import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import SettingsIcon from "@material-ui/icons/Settings";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Card, CardMedia, CardContent, CardActions } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import Hidden from "@material-ui/core/Hidden";
// Estilos
import { makeStyles } from "@material-ui/core";
// Imagen Proyecto
import leedsPortada from "../images/leedsPortada.png";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    marginLeft: "auto",
  },
  cardMedia: {
    width: "75%",
    opacity: "0.7",
  },
  link: {
    marginRight: "auto",
  },
  tag: {
    marginRight: 5,
    marginBottom: 5,
  },
  statusOfProject: {
    color: "#06C400",
  },
}));

const TagsContainer = ({ tags }) => {
  const styles = useStyles();

  return (
    <>
      {tags.map((tag) => (
        <Chip
          className={styles.tag}
          label={tag}
          variant="outlined"
          key={tag}
        ></Chip>
      ))}
    </>
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
        <div>
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
                >
                  {" "}
                  <linkItem.icon />
                </IconButton>
              ))}
            </div>
            <Hidden smDown>
              <TagsContainer tags={tags} />
            </Hidden>
          </CardActions>
        </div>
        <Hidden xsDown>
          <CardMedia className={styles.cardMedia} image={imageUrl} alt={imageAlt}></CardMedia>
        </Hidden>
      </Card>
    </Grid>
  );
};

const projectsData = [
  {
    title: "Ecommerce Indumentarias Leeds",
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
            <Project {...data} key={data.title }/>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Projects;
