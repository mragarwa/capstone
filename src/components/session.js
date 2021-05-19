import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { Typography, Box, Button } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import pinimg from './videos/pin.svg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  imageIcon: {
    height: '100%'
  },
  iconRoot: {
    textAlign: 'center'
  }
});

export default function Call ({ onProgress }) {
  const classes = useStyles();
  const [time, setTime] = useState('0');
  const [pin, setPin] = useState('0');
  const handlePin = () => {
    setPin(time);
  }

  const handleProgress = (state) => {
    setTime(Math.floor(state.playedSeconds));
  }

  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      >
        <div></div>
        <div style={{marginBottom:50}}>
          
        <Typography variant='h6' style={{marginTop:20, marginBottom:40}}>
        <Box fontWeight="fontWeightBold">
          Click on the pin button when the physician responds well or poorly. </Box> </Typography>
          <ReactPlayer 
           style={{marginBottom:10}} 
           url='https://www.youtube.com/watch?v=80XyNE89eCs' 
           onProgress={handleProgress} />
       
        <Fab color="#ffffff" aria-label="add" style={{marginRight:10}}>
        <Button onClick={handlePin}>
          <Icon classes={{root: classes.iconRoot}}>
            <img className={classes.imageIcon} src={pinimg}/>
          </Icon>
        </Button>
        
          </Fab>
          <Typography variant='body'>Last pinned at {pin} seconds</Typography>
        </div>
       
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item>
        
        </Grid>
        
        </Grid>
      
    </div>
  )}