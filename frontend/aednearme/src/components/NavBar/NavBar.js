import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer/Drawer.js";
import { MyMenu } from "../DropdownMenu/Menu.js";


export const NavBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleLogout = () => {
    sessionStorage.clear()
    alert('You have been logged out')
    window.location.reload()
  }

  return (
    <AppBar className={classes.appbar}
    >
      <CssBaseline />
      <Toolbar>
        {isMobile ? (
          <DrawerComponent />
        ) : (

          <div className={classes.root}>
           <div className="">
              <Link to="/" className={classes.logo}>AED <br /> nearMe </Link>
            </div>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>Home</Link>

            <MyMenu title="AED" menuItems={aedArray} />
            <MyMenu title="CPR" menuItems={cprArray} />
            <MyMenu title="Choking" menuItems={chokingArray} />
            

            <MyMenu title="Education Hub" menuItems={educationArray} />
            {
            sessionStorage.getItem('accessToken') ?
            <Link to="/" onClick={handleLogout} className={classes.link}>Logout</Link> :
            <Link to="/login" className={classes.link}>Login</Link>
            }
           
           
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}




const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  navlinks: {
    margin: theme.spacing(2),
    display: "flex",
    padding: "20px 0",
    borderBottom: "1px solid #fff"
  },

  logo: {
    flexGrow: "1",
    cursor: "pointer",
    textDecoration: "none",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "bolder",
    lineHeight: "0px"
  },

  link: {
    textDecoration: "none",
    // color: "#64f227",
    color: "#fff",
    fontWeight: "bold",
    // 64f227 blight green color
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "#FFD39A",
      borderBottom: "1px solid white",
    },
  },

  appbar: {
    position: "static",
    background: '#ba181b',
  },

}));

const aedArray = [
  {
    title: "How to use",
    path: '/aedhowto'
  },
  {
    title: "Register new AED",
    path: '/upload'
  }
]

const cprArray = [
  {
    title: "How to give",
    path: "/cprhowto"
  }
]
const chokingArray = [
  {
    title: "How to help",
    path: "/chokinghowto"
  }
]

const educationArray = [
  {
    title: "QUIZ",
    path: "/quiz"
  },
  {
    title: "AED: How to use",
    path: "/aedhowto"
  },
  {
    title: "CPR: How to give",
    path: "/cprhowto"
  },
  {
    title: "Choking: How to help",
    path: "/chokinghowto"
  }
]

