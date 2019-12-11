import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const dark = '#292929';
const lightDark = '#3E3E3E';
const red = '#FF5C4E';

export default {
  black,
  white,
  dark,
  lightDark,
  red,
  primary: {
    contrastText: white,
    dark: '#295db2',
    main: '#3B86FF',
    light: '#629eff',
  },
  secondary: {
    contrastText: white,
    dark: '#b24036',
    main: '#FF5C4E',
    light: '#ff7c71',
  },
  success: {
    contrastText: white,
    dark: '#1b8735',
    main: '#27c24c',
    light: '#52ce6f',
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: black,
    secondary: '#969696',
  },
  background: {
    default: '#F4F4F4',
    paper: white,
  },
  icon: colors.blueGrey[600],
  divider: '#D1D1D1',
};
