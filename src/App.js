
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
// import Job from './components/Job';
import ShowJobAdmin from './components/ShowJobAdmin';
import AddJobComp from './components/AddJobComp';
import Security1 from './service/Security';
import ShowBusiness from './components/ShowBusiness';
import ShowBusinessAdmin from './components/ShowBusinessAdmin';
import AddBusinessComp from './components/AddBusinessComp';
import ShowStudent from './components/ShowStudent'
import ShowStudentAdmin from './components/ShowStudentAdmin';
import AddStudentComp from './components/AddStudentComp';
import ShowTourism from './components/ShowTourism';
import ShowTourismAdmin from './components/ShowTourismAdmin';
import AddTourismComp from './components/AddTourismComp';
import ShowUserAdmin from './components/ShowUserAdmin';
import AddUserComp from './components/AddUserComp';
import WaitForAuth from './components/WaitForAuth';

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
  const value=window.location.pathname;
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        { !(value==="/login" || value==="/register") && <AppBar/> }
        { !(value==="/login" || value==="/register" || value==="/") && <Security1/> }
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/useradmin" element={<ShowUserAdmin/>}/>
          <Route path="/useradminadd" element={<AddUserComp/>}/>
          <Route path="/useradminadd/:userid" element={<AddUserComp/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route exact path="/" element={<WelcomePage/>}/>
          <Route path="/job" element={<ShowJob/>}/>
          <Route path="/jobadmin" element={<ShowJobAdmin/>}/>
          <Route path="/jobadminadd" element={<AddJobComp/>}/>
          <Route path="/jobadminadd/:jobid" element={<AddJobComp/>}/>
          <Route path="/business" element={<ShowBusiness/>}/>
          <Route path="/businessadmin" element={<ShowBusinessAdmin/>}/>
          <Route path="/businessadminadd" element={<AddBusinessComp/>}/>
          <Route path="/businessadminadd/:busid" element={<AddBusinessComp/>}/>
          <Route path="/student" element={<ShowStudent/>}/>
          <Route path="/studentadmin" element={<ShowStudentAdmin/>}/>
          <Route path="/studentadminadd" element={<AddStudentComp/>}/>
          <Route path="/studentadminadd/:schoolid" element={<AddStudentComp/>}/>
          <Route path="/tourism" element={<ShowTourism/>}/>
          <Route path="/tourismadmin" element={<ShowTourismAdmin/>}/>
          <Route path="/tourismadminadd" element={<AddTourismComp/>}/>
          <Route path="/tourismadminadd/:tourismid" element={<AddTourismComp/>}/>
          <Route path="/wait" element={<WaitForAuth/>}/>
         
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
