import { createMuiTheme } from '@material-ui/core/styles';

// Assign color to the variable so that we can use it in func below. (`${variable}`)
//Easy to change later.
const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

// Create a theme - centralized theme
export default createMuiTheme({
  // check default-them in material-ui. We can custermize basic theme here.
  // palette - color
  palette: {
    common: {
      arcBlue: `${arcBlue}`,
      arcOrange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  // text
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none', //this changes uppercase to normal letters
      fontWeight: '700',
      fontSize: '1rem',
    },
  },
});
