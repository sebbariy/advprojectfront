import * as React from 'react';

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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



export default function SignIn() {

  // const location = useLocation();
  // console.log(location);


  React.useEffect( () => {
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Container className='vertical-container' component="main" style={{height: "100vh"}}>
        <div className='text-center vertical-center'>
          <h2>
            Waiting Page
          </h2>
          <h4 className='text-center'>
            You were directed to this page because your authentication could not be verified. Please wait until an administrator confirms your identity.
          </h4>
          <img src='/wait.jpg' width={250} alt="waiting for auth"/>
        </div>
      </Container>
    </ThemeProvider>
  );
}