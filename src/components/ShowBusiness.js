import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container ,Paper} from '@material-ui/core';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BusinessCard from './BusinessCard';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Business() {
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
  const[bus,setBus]=useState([])  
   const classes = useStyles();

   

   useEffect(()=>{
    fetch("http://localhost:8080/business/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setBus(result);
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
      <h1>Business News</h1>
      {/* /<Paper elevation={20} style={paperStyle}> 
      </Paper>*/}
      </Box>
      <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {bus.map(bus=>(
            <Grid item xs={3}>
                <BusinessCard  busname={bus.busname} link={bus.link} description={bus.description}/>
            </Grid>
        ))}
          </Grid>
      </Box>
    </React.Fragment>
  );
}

