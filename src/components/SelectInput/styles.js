import React from 'react';
import { styled } from '@material-ui/core/styles';
import MuiFormControl from '@material-ui/core/FormControl';

export const FormControl = styled(({ ...other }) => (
  <MuiFormControl {...other} />
))({
  marginBottom: props => (props.error ? 0 : 20),
});
