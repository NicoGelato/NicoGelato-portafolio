import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Avatar from "@material-ui/core/Avatar";
import {
  Container,
  IconButton,
  Link,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
} from "@material-ui/core";
// Revisar componente obsoleto Hidden en la v5 de MUI
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
  },
  avatar: {
    marginRight: "auto",
    color: "rgb(200,200,200)",
  },
}));

const navegationLinks = [
  { name: "Proyectos", href: "#Proyectos" },
  { name: "CV", href: "#CV" },
  { name: "Sobre mí", href: "#Sobremí" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const styles = useStyles();
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <ToolBar disableGutters>
          <Avatar className={styles.avatar}>NG</Avatar>
          <Hidden xsDown>
            {navegationLinks.map((link) => (
              <Link
                className={styles.link}
                variant="button"
                color="textPrimary"
                underline="none"
                href={link.href}
                key={link.href}
              >
                {link.name}
              </Link>
            ))}
          </Hidden>
          <Hidden smUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
          </Hidden>
        </ToolBar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div>
          <IconButton>
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
