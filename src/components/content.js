import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
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
import Slider from '@material-ui/core/Slider';


const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
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
          <Paper className={classes.paper}><PlayArrowIcon /><Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      /></Paper>
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