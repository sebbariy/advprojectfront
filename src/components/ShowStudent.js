import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container ,Paper} from '@material-ui/core';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import StudentCard from './StudentCard';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Student() {
  const paperStyle = { padding: '50px 20px', width:600, margin: "20px auto" }
  const [ students, setStudents ] = useState([])
   const classes = useStyles();
   useEffect(()=>{
    fetch("http://localhost:8080/student/getAllStudents")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    }
  )
  },[])
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <h1>Education Locations</h1>
      {/* /<Paper elevation={20} style={paperStyle}></Paper> */}
      </Box>
      <h2> Universities & Colleges </h2>
      <Box sx={{ width: '100%' }} className="p30">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            students.map(student => {
              return student.type == 1 ?
                <Grid item xs={3}>
                  <StudentCard schoolName={student.schoolname} link={student.link} description={student.description} schoolImg={student.schoolImg} location={student.location} type={student.type}/>
                </Grid>
              : ''
            })
          }
        </Grid>
      </Box>
      <h2> Libraries & Coaching centers </h2>
      <Box sx={{ width: '100%' }} className="p30">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            students.map(student => {
              return student.type == 2 ?
                <Grid item xs={3}>
                  <StudentCard schoolName={student.schoolname} link={student.link} description={student.description} schoolImg={student.schoolImg} location={student.location} type={student.type}/>
                </Grid>
              : ''
            })
          }
        </Grid>
      </Box>
    </React.Fragment>
  );
}

