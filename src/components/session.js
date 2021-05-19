import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import pin from './videos/pin.svg';

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

export default function Call () {
  const classes = useStyles();
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
        <div>
        <Typography variant='h6'>Click on the pin button when the physician responds well or poorly. </Typography>
          <ReactPlayer url='https://www.youtube.com/watch?v=80XyNE89eCs' />
        <Tooltip title="Pinned at 0:30" placement="top">
        <Fab color="#ffffff" aria-label="add" style={{marginBottom:100}}>
        <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src={pin}/>
</Icon>
          </Fab>
          </Tooltip>
        </div>
       
        </Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item>
        
        </Grid>
        
        </Grid>
      
    </div>
  )}