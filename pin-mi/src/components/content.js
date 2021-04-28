import React from 'react';
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




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Questions() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [pinType, setPinType] = React.useState('opp');

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
          <Paper className={classes.paper}><PlayArrowIcon /></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
        
      <Paper>
      <Box m={2}>
      <Box fontStyle="italic">
      Transcript
      </Box>
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Personal notes..." />
        <Typography > To share with Julia:</Typography>
        <Typography> What is your perspective of what happened at this pin?</Typography>
        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Type a response..." />
        <Typography> What would you categorize this pin as?</Typography>
        <ButtonGroup disableElevation variant="contained" color="primary">
            <Button>Strength</Button>
            <Button>Opportunity</Button>
        </ButtonGroup>  
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
        color="secondary"
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
        color="secondary"
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