import { createMuiTheme } from '@material-ui/core/styles';

//** This theme is available anywhere - common styles(theme) */

// Assign color to the variable so that we can use it in func below. (`${variable}`)
//Easy to change later.
const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

// Create a theme - centralized theme
export default createMuiTheme({
  // check default-them in material-ui. We can custermize basic theme here.
  // palette - color
  // We add reusable stuffs here. ex. estimate is for button. We will use same font, color etc later
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
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
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: `${arcBlue}`,
      lineHight: 1.5,
    },
  },
});
