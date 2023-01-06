import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  // Typography, 
  Grid, 
  // Card, 
  // CardMedia, 
  // CardContent, 
  // CardActions, 
  Button 
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const styles = {
  pageContainer: {
    backgroundImage: "url('/casa.jpg')",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgb(0 0 0 / 36%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden"
  },
  container: {
    marginRight: "10px",
    marginLeft: "10px",
    paddingTop: "30px",
  },
  headerContent: {
    // fontFamily: var(--ff-lora);
    letterSpacing: "0.2rem",
    color: "whitesmoke",
    textAlign: "center",
    zindex: 1,
    padding: "4rem",
    marginBottom: "150px",
    fontSize: "35px",
  },
  header: {
    height: "100vh",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
  },
  line: {
    width: "150px",
    height: "4px",
    background: "#3e4227",
    margin: "10px auto",
    borderRadius: "5px",
  },
  h2: {
    // fontSize: "7vmin",
    marginTop: "50px",
    marginBottom: "30px",
    textTransform: "uppercase",
  },
  textCenter: {
    textAlign: "center"
  }
}

const WelcomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={styles.pageContainer}>
      <Grid container style={styles.container}>
        <Grid item xs={12} style={styles.header}>
          <div style={styles.headerContent}>
            <h1>Experience the charm and mystery of Casablanca</h1>
            <div style={styles.line}></div>
            <h2 style={styles.h2}>a city where past and present collide!</h2>
            <Link to="/login" >
              <Button size="large" color='primary' variant="contained" endIcon={<LoginIcon />}>
                Login
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default WelcomePage;
