import React from "react";
import { Link } from "react-router-dom";

//make styles
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";

//grid
import Grid from "@material-ui/core/Grid";

//mediaquery
import useMediaQuery from "@material-ui/core/useMediaQuery";

//sns icon
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import CopyrightIcon from '@mui/icons-material/Copyright';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#000',
    // 6500a3 blight-purple color
    position: "fixed",
    width: '100%',
    bottom: '0',
    left: '0',
    margin: '0 auto',
    overflow: "hidden",
    //location of the image: behind / infront
    zIndex: 1302,
    padding: "5px 0",
    // "&:before": {
    //   width: "200%",
    //   height: "100%",
    //   top: 0,
    //   left: "-100%",
    //   backgroundColor: "#64f227",
    //   //   64f227 blight green color 
    //   content: '" "',
    //   position: "absolute",
    //   transform: ` rotateZ(-60deg)`,
    //   [theme.breakpoints.down("sm")]: {
    //     height: "180%",
    //   },
    // },
  },

  item: {
    display: "flex",
    alignItems: "center",
  },

  snsIcon: {
    width: "40px",
    height: "40px",
    color: "#fff",
    // 64f227 bright green color
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      height: "30px",
    },
  },


}));


export const Footer = ({ setValue, setSelectedIndex }) => {

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">


        <Grid container direction="column">
          <Grid container justify="space-between">
            <Grid
              item
              // component={"a"}
              // target="_blank"
              // rel="noreferrer noopener"
              // href="https://mui-aed.Netlify.App"
              className={classes.item}
            >
              <MarkEmailUnreadIcon fontSize="large" className={classes.snsIcon} />
              <p>Contact <br /> info@gmail.com </p>
            </Grid>


            <Grid
              item
              // component={"a"}
              // target="_blank"
              // rel="noreferrer noopener"
              // href="https://github.com/wotaque/mui-aed"
              className={classes.item}
            >
              <CopyrightIcon fontSize="large"className={classes.snsIcon} />
              <p>© 2022 <br /> by Snake in the Flask </p>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

