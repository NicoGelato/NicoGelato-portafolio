import React, { useState } from "react";
import makeStyles from '@mui/styles/makeStyles';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import {
  Container,
  IconButton,
  Link,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@mui/material";
// Revisar componente obsoleto Hidden en la v5 de MUI
import Hidden from "@mui/material/Hidden";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const useStyles = makeStyles({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginRight: "auto",
    color: "rgb(200,200,200)",
    border: "1px solid #2F2997",
  },
}, {index:1});

const navegationLinks = [
  { name: "Proyectos", href: "#Proyectos" },
  {
    name: "CV",
    href: "/NicolasGelatoCV.pdf",
    target: "_blank",
  }];

const Header = () => {
  const [open, setOpen] = useState(false);

  const styles = useStyles();
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Avatar className={styles.avatar}>NG</Avatar>
          <Hidden smDown>
            {navegationLinks.map((link) => (
              <Link
                className={styles.link}
                variant="button"
                color="textPrimary"
                underline="none"
                href={link.href}
                key={link.href}
                target={link.target}
              >
                {link.name}
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton size="large">
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton size="large">
            <ChevronRightIcon onClick={() => setOpen(false)} />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navegationLinks.map((link) => (
            <ListItem key={link.name}>
              <Link
                className={styles.link}
                variant="button"
                color="textPrimary"
                underline="none"
                href={link.href}
                target={link.target}
              >
                {link.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;
