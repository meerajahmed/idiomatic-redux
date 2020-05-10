import React, { useRef } from 'react';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';

const RenderCount = () => {
  const refCount = useRef(0);
  // eslint-disable-next-line no-plusplus
  refCount.current++;
  return (
    <Box my={4}>
      <Alert severity="info">{`Render count: ${refCount.current}`}</Alert>
    </Box>
  );
};

export default RenderCount;
