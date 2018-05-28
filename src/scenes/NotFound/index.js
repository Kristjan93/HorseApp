import React from 'react';
import styled from 'styled-components';

import Paper from 'material-ui/Paper';

const H1 = styled.h1`
  color: red;
`

const NotFound = (props) => {
  return (
    <Paper style={{ width: '100%' }} zDepth={1}>
      <H1>404 Not Found</H1>
    </Paper>
  );
}

export default NotFound;