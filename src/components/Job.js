import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper,Button } from '@mui/material';

export default function Job() {
    const paperStyle={padding:'50px 20px',width:600,margin:"20px auto"}
    const [jobname, setJobname] = useState('');
    const [link, setJoblink] = useState('');
    const handleClick=(e)=>{
        e.preventDefault()
        const job={jobname,link}
        console.log(job)
        fetch("http://localhost:8080/job/addJob",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(job)
    
    }).then(()=>{
        console.log("New Job Added")
    })
}
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Job Name" variant="outlined" fullWidth
      value={jobname}
      onChange={(e)=>setJobname (e.target.value)}
      />
      <TextField id="outlined-basic" label="Job Link" variant="outlined" fullWidth
      value={link}
      onChange={(e)=>setJoblink(e.target.value)}
      />
    </Box>
    <Button variant="contained" onClick={(e)=>handleClick(e)}>Submit</Button>
    </Paper>
    </Container>
  );
}