import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Icon from '@material-ui/core/Icon';
import pin from './videos/pin.svg'
import pin2 from './videos/pin2.svg'
import audio from './videos/audio.mp3'
import ReactPlayer from 'react-player'
import Fab from '@material-ui/core/Fab';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  },
  fab:{
    marginLeft: 620,
    marginRight: 150,
  }
}));

export default function Questions() {
  const classes = useStyles();
  const [pinType, setPinType] = React.useState('');

  const handleAlignment = (event, newAlignment) => {
    setPinType(newAlignment);
  };

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography variant='h6'>Listen back to your pins and take notes to discuss with your peer. </Typography>
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
        Am I starting now? Um, I guess, should I ask the person to continue thinking out loud? I guess? Yeah, we can share this soon or yeah, you can think out loud for this part too. Okay.
        <Box fontWeight="bold">0:15</Box>
        I think I will press join now.
        <Box fontWeight="bold">0:26</Box>
        Hmm.
        <Box fontWeight="bold">0:35</Box>
        Am I starting up?
        <Box fontWeight="bold">0:40</Box>
        What's the problem for you? I guess? Um, yeah, I think it's been a hard time, um, that, um, I was just been unable to concentrate on a lot of things at work. Um, so what made you difficult on them? Concentrating on your stove?
        <Box fontWeight="bold">1:05</Box>
        Um, yeah, so I just broke up with my boyfriend, um, a couple weeks ago and I don't know, I guess things have kind of went down since then.
        </Typography>
        </Box>
        </Paper>
        
        </Grid>
        <Grid item xs={12} sm={8}>
        
      <Paper>
      <Box m={2}>
      <Box fontStyle="italic">
      The session was pinned at 5:10
      </Box>
      <TextField
        id="outlined-secondary"
        label="Personal Notes..."
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        margin="normal"
      />

<Box fontStyle="italic"> To share with your peer:</Box>
        <Typography> What is your perspective of what happened at this pin?</Typography>
        <TextField
        id="outlined-secondary"
        label="Type a response..."
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        margin="normal"
      />
        <Typography> What would you categorize this pin as?</Typography>
        <ToggleButtonGroup
        value = {pinType}
      exclusive
      align="right"
      onChange={handleAlignment}
    >
      <ToggleButton value="strength">
        Strength
      </ToggleButton>
      <ToggleButton value="opp">
        Opportunity
      </ToggleButton>
    </ToggleButtonGroup> 
        </Box>
        </Paper>
        
      </Grid>
      </Grid>
      </Container>
    </div>
  );
}