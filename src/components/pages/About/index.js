import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const About = () => (
  <Container>
    <Box my={4}>
      <Typography variant="h4" align="center">
        About page
      </Typography>
    </Box>
  </Container>
);

export default About;
