import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';

export default createMuiTheme({
  palette,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});
