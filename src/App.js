import React from "react";
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Box from '@material-ui/core/Box';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleTabs from './components/collab-content.js';
import Questions from './components/content.js';
import Refresher from './components/refresher.js';
import Call from './components/session.js';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import CreateIcon from '@material-ui/icons/Create';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/Person';
import RefreshIcon from '@material-ui/icons/Refresh';
import DoneIcon from '@material-ui/icons/Done';



  const useQontoStepIconStyles = makeStyles({
    root: {
      color: '#eaeaf0',
      display: 'flex',
      height: 22,
      alignItems: 'center',
    },
    active: {
      color: '#784af4',
    },
    circle: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
    completed: {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
  });
  

  // Handling status of what page in the steppers is active
  function QontoStepIcon(props) {
    const classes = useQontoStepIconStyles();
    const { active, completed } = props;
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
        })}
      >
        {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
      </div>
    );
  }
  
  // Assigning bool value to active status
  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
  };
  
  // Style for stepper
  const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundColor:
        '#FC6D78',
        
      },
    },
    completed: {
      '& $line': {
        backgroundColor:
        '#FDA2A9',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#DDEEF9',
      borderRadius: 1,
    },
  })(StepConnector);
  
  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#DDEEF9',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundColor:
        '#FC6D78',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundColor:
        '#FDA2A9',
    },
    space: {
      marginTop: 100,
    }
  });
  
  // Icons for each step in stepper
  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <RefreshIcon />,
      2: <VoiceChatIcon />,
      3: <CreateIcon />,
      4: <QuestionAnswerIcon />,
      5: <PersonIcon />,
      6: <DoneIcon />
    };
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }
  
  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
      marginBottom: 40,
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  // Assigning names to each step
  function getSteps() {
    return ['MI Refresher', 'Practice Session', 'Discussion Prep', 'Collaborative Discussion', 'Self-Reflection', 'Complete'];
  }
  
  // Assigning content of each step
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Refresher />;
      case 1:
        return <Call />;
      case 2:
        return <Questions />;
      case 3:
        return <SimpleTabs />;
      case 4:
        return '*Insert Self-Reflection Content*'
      default:
        return 'Unknown step';
    }
  }
  
  // main function that renders content
  export default function App() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(1);
    };
  
    return (
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
        <Box display="flex" justifyContent="center" >
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
              Congratulations! You have successfully finished today’s session in Pin-MI.
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
              Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 1} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                <Button
                  disabled={activeStep === 3}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
          </Box>
        </div>
      </div>
    );
  }