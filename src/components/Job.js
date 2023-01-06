import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Job() {
    const paperStyle={padding:'50px 20px',width:600,margin:"20px auto"}
    const [companyImg, setCompanyImg] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [jobname, setJobname] = useState('');
    const [link, setJoblink] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const handleClick=(e)=>{
        e.preventDefault();
        const job={companyImg,companyname,jobname,link,description};
        console.log(job);
        fetch("http://localhost:8080/job/addJob",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(job)
    
    }).then(()=>{
        console.log("New Job Added");
        navigate('/jobadmin');
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
      Style={{marginTop:"80px"}}
    >
      <h3>Add Jobs</h3>
      <TextField id="outlined-basic" label="Company Image " variant="outlined" fullWidth
      value={companyImg}
      required
      onChange={(e)=>setCompanyImg (e.target.value)}
      />
      <TextField id="outlined-basic" label="Company name" variant="outlined" fullWidth
      value={companyname}
      required
      onChange={(e)=>setCompanyname(e.target.value)}
      />
      <TextField id="outlined-basic" label="Job name" variant="outlined" fullWidth
      value={jobname}
      required
      onChange={(e)=>setJobname(e.target.value)}
      />
      <TextField id="outlined-basic" label="Link to job application (do not forget https://" variant="outlined" fullWidth
      value={link}
      required
      onChange={(e)=>setJoblink(e.target.value)}
      />
      <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth
      value={description}
      required
      onChange={(e)=>setDescription(e.target.value)}
      />
    </Box>
    <Button variant="contained" onClick={(e)=>handleClick(e)}>Add job</Button>

    </Paper>
    </Container>
  );
}