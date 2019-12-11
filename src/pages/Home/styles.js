import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

export const Root = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

export const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(135deg, #AB47BC 30%, #4A148C 80%)',
  color: '#FFFFFF',
});

export const Space = styled('div')({
  flexGrow: 1,
});
