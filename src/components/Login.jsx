import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
/* import Link from '@mui/material/Link'; */
import {Link, useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';
import { Alert } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      light: '#3e4227',
      main: '#3e4227',
      dark: '#3e4227',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
const style = {
  pageContainer: {
    marginTop: '85.25px',
  },
  pageContainerBackground: {
    backgroundImage: "url('/casa.jpg')",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgb(0 0 0 / 36%)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    overflow: "hidden"
  }
}

export default function SignIn() {

  // const location = useLocation();
  // console.log(location);
  const [error, setError] = React.useState(false);
  const [user, setUser] = React.useState({
    username: String,
    password: String,
  });
  const navigate = useNavigate();

  React.useEffect( () => {
    const tempUser = JSON.parse(localStorage.getItem("User"));
    setUser(tempUser);
    if ( tempUser?.userid > 0 ) {
      const path = (tempUser.auth == 0) ? "/wait":(tempUser.role == "Admin") ? "/admin":"/tourism";
      navigate(path);
    }

    // window.addEventListener('storage', (event) => {
    //   console.log("hello");
    //   if ( event.key === "User" ) {
    //     setUser(JSON.parse(event.newValue));
    //     const path = (user.auth == 0) ? "/wait":(user.role == "Admin") ? "/admin":"/tourism";
    //     navigate(path);
    //   }
    // });

    return () => {
      window.removeEventListener("storage", () => {});
    }
  }, []);
  

  const handleSubmit = (event) => {
    setError(false);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get('username'),
      password: data.get('password'),
    }

    fetch("http://localhost:8080/user/login", {
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(user)
    }).then((res) => { 
      if ( res.status == 200 ) {
        setError(false);
        res.json().then((response) => {
          localStorage.setItem("User", JSON.stringify(response));
          setUser(response);
          const path = (user.auth == 0) ? "/wait":(user.role == "Admin") ? "/admin":"/tourism";
          navigate(path);
        }).catch(() => {
          setError(true);
        })
      } else {
        setError(true);
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={style.pageContainer}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {
              error && (
                <Alert severity="warning">Wrong username or password</Alert>
              )
            }
            <Button
              type="submit"
              color='primary'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}