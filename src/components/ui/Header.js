import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
      height: '8em',
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent', // eliminate a little opacity(black shade) when hovered
      },
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
    menu: {
      //change manu background color
      backgroundColor: theme.palette.common.arcBlue,
      color: 'white',
      borderRadius: '0px',
    },
    menuItem: {
      ...theme.typography.tab,
      // opacity - change text color darker when it was hovered
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
      },
    },
  })
);

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Development', link: '/customsoftware' },
    { name: 'Mobile App Development', link: '/mobileapps' },
    { name: 'Website Development', link: '/websites' },
  ];

  useEffect(() => {
    // Refactor with swith below
    // if (window.location.pathname === '/' && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === '/services' && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === '/revolution' && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === '/about' && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === '/contact' && value !== 4) {
    //   setValue(4);
    // } else if (window.location.pathname === '/estimate' && value !== 5) {
    //   setValue(5);
    // }

    // Menu and menu Item (inside service) switch
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
        break;
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobileapps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;
      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;
      case '/estimate':
        if (value !== 5) {
          setValue(5);
        }
        break;
      default:
        break;
    }
  }, [value]); // useEffect is depending on 'value' whenever value changes, it triggers

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          {/* disableGutters removes paddings. disableGutters=true but we can just say disableGutters */}
          <Toolbar disableGutters>
            {/* Make log to Link - wrap with Button and add component={Link} */}
            {/* Button has padding so we will delete the padding by logoContainer above */}
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setValue(0)} //change indicator to Home
              disableRipple //disable default repple effect (if you want, you can leave it as default)
            >
              <img src={logo} alt="company logo" className={classes.logo} />
            </Button>
            {/* https://material-ui.com/api/typography/ */}
            {/* <Typography variant="h3">Arc Development</Typography> */}
            {/* Tabs value is like index. if Tab=0, firstTab is indicated, We change the value by onChange  */}
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              // indicatorColor="primary" if you want to change the indicator color
            >
              {/* Tab will be 'Link' by adding component={Link} - you need to import Link as usual*/}
              {/* to is route path */}
              <Tab
                className={classes.tab}
                label="Home"
                component={Link}
                to="/"
              />
              <Tab
                // aria-owns jump to id of Menu below
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                className={classes.tab}
                onMouseOver={(event) => handleClick(event)}
                label="Services"
                component={Link}
                to="/services"
              />
              <Tab
                className={classes.tab}
                label="The Revolution"
                component={Link}
                to="/revolution"
              />
              <Tab
                className={classes.tab}
                label="About Us"
                component={Link}
                to="/about"
              />
              <Tab
                className={classes.tab}
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Free Estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              // This enables to track. When mouseleave, menuItem is closed
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }} //Not className but use classes for paper. Access to paper component
              elevation={0} //remove subtle popup when user mouseovered menu
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.memuItem }}
                  onClick={(event) => {
                    handleMenuItemClick(event, i);
                    setValue(1);
                    handleClose();
                  }}
                  //applid selected style when index === selectedIndex
                  // value === 1 means is when Services is selected
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
              {/* We refactors the following MenuItem above */}
              {/* When MenuItem is clicked, menu will close */}
              {/* <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/services"
                classes={{ root: classes.menuItem }}
              >
                Services
              </MenuItem>
              <MenuItem 
                // onClick - we can add multiple function - here, handleClose and setValue
                // originally, it was just  onClick={handleClose}
                // When it clicked, close and also setValue(1) means, move indicater to service (index 1)
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/customsoftware"
                classes={{ root: classes.menuItem }}
              >
                Custom Software Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/mobileapps"
                classes={{ root: classes.menuItem }}
              >
                Mobile App Development
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  setValue(1);
                }}
                component={Link}
                to="/websites"
                classes={{ root: classes.menuItem }}
              >
                Website Development
              </MenuItem> */}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {/* this gives margin bottom under nav */}
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
