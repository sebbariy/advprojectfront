
import './App.css';
import Login from './components/Login'
import { Routes, Route,} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './components/Appbar';
import WelcomePage from './components/Welcome';
import Register from './components/Register'
import { createTheme } from '@mui/material/styles';
import { MuiThemeProvider } from '@material-ui/core';
import ShowJob from './components/ShowJob';
import Job from './components/Job';
import JobCard from './components/JobCard';
import Student from './components/Student';
import ShowJobAdmin from './components/ShowJobAdmin';
import AddJobComp from './components/AddJobComp';
import { Add } from '@material-ui/icons';


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
function App() {
  
  /*const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []); */


  const value=window.location.pathname;
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        { !(value==="/login" || value==="/register") && <AppBar/> }
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route exact path="/" element={<WelcomePage/>}/>
          <Route path="/job" element={<ShowJob/>}/>
          <Route path="/jobadmin" element={<ShowJobAdmin/>}/>
          <Route path="/jobadminadd" element={<Job/>}/>
          <Route path="/add-jobadminadd/:id" element={<AddJobComp/>}/>
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
