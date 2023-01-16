import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container ,Paper} from '@material-ui/core';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TourismCard from './TourismCard';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Tourism() {
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
  const[tourism,setTourism]=useState([])
   const classes = useStyles();

   useEffect(()=>{
    fetch("http://localhost:8080/tourism/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setTourism(result);
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
      <h1>Touristic Locations</h1>
      {/* /<Paper elevation={20} style={paperStyle}> 
      </Paper>*/}
      </Box>
      <h2>Hotels</h2>
      <Box sx={{ width: '100%' }} style={{ padding: "30px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          tourism.map( tourism => {
            return tourism.tourismType == 1 ? 
              <Grid item xs={3}>
                <TourismCard  tourismname={tourism.tourismname} link={tourism.link} description={tourism.description} location={tourism.location} tourismType={tourism.tourismType}/>
              </Grid>:''
          })
        }
        </Grid>
      </Box>
      <h2>Restaurants</h2>
      <Box sx={{ width: '100%' }} className="p30">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          tourism.map( tourism => {
            return tourism.tourismType == 2 ? 
              <Grid item xs={3}>
                <TourismCard  tourismname={tourism.tourismname} link={tourism.link} description={tourism.description} location={tourism.location} tourismType={tourism.tourismType}/>
              </Grid>:''
          })
        }
        </Grid>
      </Box>
      <h2>Facilities</h2>
      <Box sx={{ width: '100%' }} className="p30">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          tourism.map( tourism => {
            return tourism.tourismType == 3 ? 
              <Grid item xs={3}>
                <TourismCard  tourismname={tourism.tourismname} link={tourism.link} description={tourism.description} location={tourism.location} tourismType={tourism.tourismType}/>
              </Grid>:''
          })
        }
        </Grid>
      </Box>
    </React.Fragment>
  );
}

