import React, { useState, useEffect } from "react";
import  GitHubIcon  from "@material-ui/icons/GitHub";
import  LinkedInIcon  from "@material-ui/icons/LinkedIn";
import { Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { Grow } from "@material-ui/core";


const socialItems = [
  {
    icon: GitHubIcon,
    title: "Github.com/NicoGelato",
    url: "https://github.com/NicoGelato",
  },
  {
      icon: LinkedInIcon,
      title: "Linkedin.com/in/nicolasgelato", 
    url: "https://www.linkedin.com/in/nicolasgelato",
  },
];

const Social = ({ direction }) => {
    const [shouldShow, setShouldShow] = useState(false);
    
        useEffect(() => {
          setShouldShow(true);
        }, []);
    
  return (
    <Grid container direction={direction || "row"} spacing={1}>
      {socialItems.map((item) => (
        <Grow key={item.title} in={shouldShow}>
          <Grid item>
            <Link href={item.url} title={item.title} target="_blank">
              <IconButton>
                <item.icon />
              </IconButton>
            </Link>
          </Grid>
        </Grow>
      ))}
    </Grid>
  );
};

export default Social;
