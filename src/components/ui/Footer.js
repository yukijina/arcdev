import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden'; //Hidden when screen size is small

import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302, //same index as header so footer is also above the drawer
    position: 'relative', // for zIndexw work, we need relative here
  },
  adornment: {
    width: '25em',
    //where the image is anchored in the screen (image was slightly above the footer so we put image at the bottom)
    verticalAlign: 'bottom',
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute', //make grid appered on top of the image
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    width: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContainer: {
    position: 'absolute',
    marginTop: '-6rem', //move container up
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {/* All wrapped components are hiddden if the screen size is smaller */}
      <Hidden smDown>
        <Grid container justify="center" className={classes.mainContainer}>
          {/* 1 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column">
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(0)}
                component={Link}
                to="/"
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          {/* 2 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(0);
                }}
                component={Link}
                to="/services"
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(1);
                }}
                component={Link}
                to="/customsoftware"
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
                component={Link}
                to="/movbileapps"
              >
                iOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
                component={Link}
                to="/website"
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>

          {/* 3 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
              >
                The Revolusion
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(2)}
                component={Link}
                to="/revolution"
              >
                Process
              </Grid>
            </Grid>
          </Grid>

          {/* 4 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link}
                to="/about"
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link}
                to="/about"
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(3)}
                component={Link}
                to="/about"
              >
                Team
              </Grid>
            </Grid>
          </Grid>

          {/* 5 */}
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => props.setValue(4)}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />

      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        {/* component 'a' means regular anchor tag. so you can use href */}
        <Grid
          item
          component={'a'}
          href="http://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={facebook} alt="facebook logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={twitter} alt="twitter logo" className={classes.icon} />
        </Grid>
        <Grid
          item
          component={'a'}
          href="http://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={instagram} alt="instagram logo" className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
}
