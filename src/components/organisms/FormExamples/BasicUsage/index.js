import React from 'react';
import { FormContext, useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import useStyles from './useStyles';
import Debug from '../../../molecules/Debug';
import formConfig from '../../../../global/config/form';

const BasicUsage = () => {
  const methods = useForm(formConfig);
  const classes = useStyles();
  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log(data);

  return (
    <Container component="main" maxWidth="sm">
      <Box my={8}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <FormContext {...methods}>
          <Paper className={classes.paper}>
            <form onSubmit={methods.handleSubmit(onSubmit)} autoComplete="off">
              <FormControl fullWidth>
                <InputLabel htmlFor="my-input">Label</InputLabel>
                <Input
                  id="my-input"
                  aria-describedby="my-helper-text"
                  name="label"
                  inputRef={methods.register}
                />
                <FormHelperText id="my-helper-text">Helper text here</FormHelperText>
              </FormControl>
              <Box mt={4}>
                <Button type="submit" variant="outlined" color="primary" fullWidth>
                  Submit
                </Button>
              </Box>
            </form>
          </Paper>
          <Debug />
        </FormContext>
      </Box>
    </Container>
  );
};

export default BasicUsage;
