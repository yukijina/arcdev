import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';

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
    borderColor: theme.palette.common.blue,
    color: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9em',
    height: 45,
    width: 145,
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
}));

export default function LandingPage() {
  const classes = useStyles();
  // This makes theme available in the retun below (ButtonArrow). If it is not necessary, you can skip const theme here
  const theme = useTheme();

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
    </Grid>
  );
}
