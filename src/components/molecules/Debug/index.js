import React from 'react';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Box from '@material-ui/core/Box';
import useStyles from './useStyles';
import RenderCount from './RenderCount';
import FormState from './FormState';
import FormValues from './FormValues';
import FormErrors from './FormErrors';

const Debug = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root} my={4}>
      <Debug.RenderCount />
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Form State</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Debug.FormState />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Form Values</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Debug.FormValues />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Form Errors</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Debug.FormErrors />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Box>
  );
};

Debug.RenderCount = RenderCount;
Debug.FormState = FormState;
Debug.FormValues = FormValues;
Debug.FormErrors = FormErrors;

export default Debug;
