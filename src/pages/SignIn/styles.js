import React from 'react';
import { styled } from '@material-ui/core/styles';
import MuiPaper from '@material-ui/core/Paper';
import MuiContainer from '@material-ui/core/Container';
import MuiTypography from '@material-ui/core/Typography';
import MuiButton from '@material-ui/core/Button';
import MuiLinearProgress from '@material-ui/core/LinearProgress';

export const Root = styled('div')({
  width: '100%',
  background: 'linear-gradient(180deg, #AB47BC 30%, #4A148C 90%)',
});

export const Container = styled(MuiContainer)(({ theme }) => ({
  paddingTop: theme.spacing(5),
}));

export const Content = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 3, 2, 3),
}));

export const Paper = styled(MuiPaper)({
  padding: 0,
});

export const Title = styled(({ ...props }) => (
  <MuiTypography variant="h4" {...props} />
))(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(5),
}));

export const Form = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
}));

export const Button = styled(MuiButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '100%',
}));

export const LinearProgress = styled(MuiLinearProgress)({
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
});
