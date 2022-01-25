import React, { useState, useEffect } from "react";
import  GitHubIcon  from "@mui/icons-material/GitHub";
import  LinkedInIcon  from "@mui/icons-material/LinkedIn";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import { Link } from "@mui/material";
import { Grow } from "@mui/material";


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
              <IconButton size="large">
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
