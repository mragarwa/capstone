import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PinDropIcon from '@material-ui/icons/PinDrop';
import RoomIcon from '@material-ui/icons/Room';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import audio from './videos/discussion_nv.m4a'
import ReactPlayer from 'react-player'
import juliadiscussion from './videos/julia_discussion_nv.mp4'
import nancydiscussion from './videos/nancy_discussion_nv.mp4'
import Card from '@material-ui/core/Card';
import { sizing } from '@material-ui/system';
import { ArrowRight } from '@material-ui/icons';
import Icon from '@material-ui/core/Icon';
import pin from './videos/pin.svg'
import pin2 from './videos/pin2.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  fab:{
    marginLeft: 620,
    marginRight: 150,
  },
  button: {
    marginLeft: 250,
    marginRight: 20,
  },
  card: {
    width: "25%",
    marginLeft: 10,
    marginBottom: 10,
    justify:"flex-end",
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
}));

export default function Questions() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [pinType, setPinType] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAlignment = (event, newAlignment) => {
    setPinType(newAlignment);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          
          <Grid
  container
  direction="row"
  justify="flex-end"
  alignItems="flex-end"
>
  
</Grid>
<Typography variant='h6'>Review all pins with your peer, Julia. </Typography>
<Paper variant='outlined' style={{padding:10, marginTop:10}}>
          <ReactPlayer
        url= {audio}
        controls='true'
        width="100%"
        height="50px"
        style={{marginBottom:5}}
        />
         <Fab color="primary" aria-label="add" className={classes.fab}>
         <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={pin2}/>
</Icon>
          </Fab>
        <Fab color="#ffffff" aria-label="add">
        <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={pin}/>
</Icon>          </Fab>
          
        </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
        
      <Paper>
      <Box m={2}>
      <Box fontStyle="italic">
      Transcript
      </Box>
        <Typography><Box fontWeight="bold">0:03</Box>
        Um, I mean, I tried to talk to him, but then it really. 
No anywhere. And he told me that I'm crazy. 

<Box fontWeight="bold">0:10</Box>
And how did that make you feel? 

 <Box fontWeight="bold">0:16</Box>
 I don't, I just lost it. Um, I don't know. I guess I 
started to believe that and that's sort of why I'm here. 
I'm questioning whether or not I am crazy. 


        <Box fontWeight="bold" color='#FC6D78'>0:30</Box>
        Did he give any specific examples as to why he would have 
thought that       <Box fontWeight="bold">0:40</Box>
I would hope that he did, but I feel like it 
just came out of nowhere. Um, and it's just been hard 
because I feel like I haven't. Nobody to turn to 
        <Box fontWeight="bold">1:05</Box>
        who has 
been your support system in the past for you?          </Typography>
        </Box>
        </Paper>
        
        </Grid>
        <Grid item xs={12} sm={8}>
        
      <Paper>
      <Box m={2}>
      <Box fontStyle="italic">
      The session was pinned at 0:30
      </Box>
      

        <Typography> What is your perspective of what happened at this pin?</Typography>
        <Grid
        container
        direction="row"
        spacing = {24}

        >
          <Grid item xs={12} sm={6}>
          <Box mr={2}><Paper><Box m={2}><Box fontWeight="bold">Your response: Opportunity</Box>It was an awkward silence that I let go too long. She might be thinking that she is crazy. </Box></Paper> </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box my={1}><Paper><Box m={2}><Box fontWeight="bold">Your peer's response: Strength</Box>It was a good open-ended question. </Box></Paper> </Box>
      </Grid>
        </Grid>

        <Typography> What MI skills were or could have been used here?</Typography>
        <Grid
        container
        direction="row"
        spacing = {24}

        >
          <Grid item xs={12} sm={6}>
          <Box mr={2}><Paper><Box m={2}><Box fontWeight="bold">Your response: Opportunity</Box>A more open-ended question to get to the root of her thoughts</Box></Paper> </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Box my={1}><Paper><Box m={2}><Box fontWeight="bold">Your peer's response: Strength</Box>Used open-ended questions. </Box></Paper> </Box>
      </Grid>
        </Grid>
        <Typography>Why was this effective or ineffective? If the latter, what could you say instead?</Typography>
        <TextField
        id="outlined-secondary"
        label="Type a response..."
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        margin="normal"
      />
        <Button variant="contained" color="#337E92" className={classes.button}>
  Prev Pin
</Button>
<Button variant="contained" color="primary">
  Next Pin
</Button>
        </Box>
        </Paper>
        
      </Grid>
      </Grid>
      </Container>
    </div>
  );
}