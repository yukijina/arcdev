import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRigth: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9em',
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
  heroTextContainer: {
    // By adding minWith, keep width until breakpoint - won't be ugly look
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLect: 0,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBotton: '1em',
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  // This makes theme available in the retun below (ButtonArrow). If it is not necessary, you can skip const theme here
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  // It is from react-lottie
  //https://github.com/chenqingspring/react-lottie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* column - 1 */}
      <Grid item>
        {/*---- Hero Block ---- */}
        <Grid container justify="flex-end" alignItems="center" direction="row">
          {/* 1-1 */}
          {/* sm - it is like auto - automatically fit the space until this breakpoint(small size). After sm, the row extends till edge */}
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bring west Coast Technology
              <br />
              to the Midwest
            </Typography>
            {/* container for button */}
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  {/* margin right space til arrow */}
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* 1-2 */}
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
      {/* column - 2 */}
      <Grid item>
        {/* service 1/3 - custom software */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? 'center' : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration</span>
            </Typography>
            <Button variant="outlined" class={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src={customSoftwareIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>

        {/* column - 3 */}
        <Grid item>
          {/* service 2/3 - iOS/Android App*/}
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justify={matchesSM ? 'center' : 'flex-end'} // push container to right
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant="h4">iOS/Android App Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app
                {matchesSM ? null : <br />}
                with either mobile platform.
              </Typography>
              <Button variant="outlined" class={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
              <img
                alt="mobile phone icon"
                src={mobileAppsIcon}
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* column - 4 */}
        <Grid item>
          {/* service 3/3 - Website App*/}
          <Grid
            container
            direction="row"
            className={classes.serviceContainer}
            justify={matchesSM ? 'center' : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchesSM ? 0 : '5em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimaized for Search Engine. Build for Dpeed.
                {matchesSM ? null : <br />}
                with either mobile platform.
              </Typography>
              <Button variant="outlined" class={classes.learnButton}>
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid item>
              <img
                alt="website icon"
                src={websitesIcon}
                className={classes.icon}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}