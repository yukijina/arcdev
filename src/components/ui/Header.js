import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  // this triggers event (scroll)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    // when/how far event is triggered when user scroll
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// inline styles - when you want to customerize theme or create styles
// if you want to centrilize theme (if you want to apply not just in this component but want to use other components, you can add to Theme dierectly and can get with like '...theme.typography.tab)
const useStyles = makeStyles((theme) =>
  // you can name key and apply it to className
  ({
    toolbarMargin: {
      // check defaultTheme https://material-ui.com/customization/default-theme/
      // copy them.mixins.toolbar (from Theme) and only change marginBottom
      ...theme.mixins.toolbar,
      marginBottom: '3em',
    },
    logo: {
      height: '7em',
    },
    tabContainer: {
      // set left margin to auto (extends and push all tabls to right)
      marginLeft: 'auto',
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: '25px', // We use px here because we want to have consistant space regardless screen size
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: '50px',
      marginLeft: '50px',
      marginRight: '25px',
      height: '45px',
    },
  })
);

const Header = (props) => {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          {/* disableGutters removes paddings. disableGutters=true but we can just say disableGutters */}
          <Toolbar disableGutters>
            <img src={logo} alt="company logo" className={classes.logo} />
            {/* https://material-ui.com/api/typography/ */}
            {/* <Typography variant="h3">Arc Development</Typography> */}
            <Tabs className={classes.tabContainer}>
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* this gives margin bottom under nav */}
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
