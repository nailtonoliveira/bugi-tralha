import React from 'react';
import { styled } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';

export const TextField = styled(({ ...other }) => <MuiTextField {...other} />)({
  marginTop: 12,
});
