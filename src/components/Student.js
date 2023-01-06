import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper,Button } from '@mui/material';

export default function Job() {
    const paperStyle={padding:'50px 20px',width:600,margin:"20px auto"}
    const [tourismType, setTourismType] = useState('');
    const [tourismImg, setTourismImg] = useState('');
    const [tourismname, setTourismname] = useState('');
    const [location,setLocation] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const handleClick=(e)=>{
        e.preventDefault()
        const tourism={tourismType,tourismImg,tourismname,location,link,description}
        console.log(tourism)
        fetch("http://localhost:8080/job/addTourism",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(tourism)
    
    }).then(()=>{
        console.log("New Touristic location Added")
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
      <h3>Add Touristic locations</h3>
      <TextField id="outlined-basic" label="Tourism type (hotels = 1,restaurants = 2,facilities = 3) " variant="outlined" fullWidth
      value={tourismType}
      onChange={(e)=>setTourismType (e.target.value)}
      />
      <TextField id="outlined-basic" label="Touristic location image" variant="outlined" fullWidth
      value={tourismImg}
      onChange={(e)=>setTourismImg(e.target.value)}
      />
      <TextField id="outlined-basic" label="Name of the location" variant="outlined" fullWidth
      value={tourismname}
      onChange={(e)=>setTourismname(e.target.value)}
      />
      <TextField id="outlined-basic" label="Location of the place (please provide google maps link" variant="outlined" fullWidth
      value={location}
      onChange={(e)=>setLocation(e.target.value)}
      />
      <TextField id="outlined-basic" label="Link to job application (do not forget https://" variant="outlined" fullWidth
      value={link}
      onChange={(e)=>setLink(e.target.value)}
      />
      <TextField id="outlined-basic" label="Description" variant="outlined" fullWidth
      value={description}
      onChange={(e)=>setDescription(e.target.value)}
      />
    </Box>
    <Button variant="contained" onClick={(e)=>handleClick(e)}>Submit</Button>
    </Paper>
    </Container>
  );
}