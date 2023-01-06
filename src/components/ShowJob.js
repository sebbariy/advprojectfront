import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container ,Paper} from '@material-ui/core';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import JobCard from './JobCard';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Job() {
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
  const [jobname, setJobname] = useState('');
  const [link, setJoblink] = useState('');
  const[jobs,setJobs]=useState([])
   const classes = useStyles();

   

   useEffect(()=>{
    fetch("http://localhost:8080/job/getAllJobs")
    .then(res=>res.json())
    .then((result)=>{
      setJobs(result);
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
      <h1>Open Jobs</h1>
      {/* /<Paper elevation={20} style={paperStyle}> 
      </Paper>*/}
      </Box>
      <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {jobs.map(job=>(
            <Grid item xs={3}>
                <JobCard  jobName={job.jobname} jobLink={job.link} description={job.description} companyImg={job.companyImg} companyName={job.companyname}/>
            </Grid>
        ))}
          </Grid>
      </Box>
    </React.Fragment>
  );
}

