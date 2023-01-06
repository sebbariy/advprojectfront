import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const JobCard = (props) => {
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="50"
        width="150"
        image={props.companyImg}
        alt="companyImg"
      />
      <CardContent >
        <Typography variant="h5" color="text.primary">
          {props.jobName}
        </Typography>
        <Typography variant="h7" color="text.primary">
          {props.companyName}
        </Typography>
        <Typography variant="p" color="text.primary">
          <br/>Casablanca, Morocco
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
          <Button
            type="button"
            color='primary'
            variant="contained"
            onClick={ () => window.open(props.jobLink,"_blank")}
          >
            Apply
          </Button>

        <ExpandMore

          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Job Description:</Typography>
          <Typography>
            {props.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}


export default JobCard