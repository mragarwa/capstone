import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


export default function Refresher() {

  const [answer1, setAnswer1] = React.useState('');
  const [answer2, setAnswer2] = React.useState('');


  const handleAnswer1 = (event, newAnswer) => {
    setAnswer1(newAnswer);
  };

  const handleAnswer2 = (event, newAnswer) => {
    setAnswer2(newAnswer);
  };

  return (
    <div>
      <Container>
      <Box fontStyle="italic">
        Complete the exercises to unlock today’s session!
      </Box>
      <Box>
      OARS are basic skills practitioners often have in their clinical toolbox already.
      <ToggleButtonGroup
      value = {answer1}
      onChange={handleAnswer1}
      exclusive
      aria-label="text alignment"
      align="right"
    >
      <ToggleButton value="true">
        True
      </ToggleButton>
      <ToggleButton value="false">
        False
      </ToggleButton>
    </ToggleButtonGroup>
    </Box>
    <Box>
    Questions tend to stop momentum.
    <ToggleButtonGroup
      value = {answer2}
      onChange={handleAnswer2}
      exclusive
      aria-label="text alignment"
    >
      <ToggleButton value="true">
        True
      </ToggleButton>
      <ToggleButton value="false">
        False
      </ToggleButton>
    </ToggleButtonGroup>
    </Box>
      <Box fontWeight="fontWeightBold">
      Practicing Open-ended Questions
      </Box>
      <Box>
      <Typography>Are you doing OK today?</Typography>
      <TextField
        id="outlined-secondary"
        label="Convert the closed question to open-ended..."
        fullWidth
        variant="outlined"
      />
      </Box>
      <Box>
      <Typography>How much do you drink on a typical drinking occasion?</Typography>
      <TextField
        id="outlined-secondary"
        label="Convert the closed question to open-ended..."
        fullWidth
        variant="outlined"
      />
      </Box>
      <Box>
      <Typography>I don’t get what we’re supposed to be doing here.</Typography>
      <TextField
        id="outlined-secondary"
        label="Form a question in response to the client statement..."
        fullWidth
        variant="outlined"
      />
      </Box>
      <Box>
      <Typography>I love my kids, but sometimes they push me to the edge, and then I do things I shouldn’t.</Typography>
      <TextField
        id="outlined-secondary"
        label="Form a question in response to the client statement..."
        fullWidth
        variant="outlined"
      />
      </Box>
      </Container>
    </div>
  );
}