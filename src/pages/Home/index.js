import React from 'react';
import { useDispatch } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { signOut } from '../../store/modules/auth/actions';

import { Root, StyledAppBar, Space } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  function signOutApp() {
    dispatch(signOut());
  }

  return (
    <Root>
      <StyledAppBar position="relative">
        <Toolbar>
          <Typography>Home</Typography>
          <Space />
          <IconButton color="inherit" onClick={signOutApp}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Container maxWidth="sm">
        <h5>Put here some information</h5>
      </Container>
    </Root>
  );
}
