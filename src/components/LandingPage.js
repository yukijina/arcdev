import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CallToAction from './ui/CallToAction';

import ButtonArrow from './ui/ButtonArrow';
import animationData from '../animations/landinganimation/data';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import infoBackground from '../assets/infoBackground.svg';

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
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    //div does not have any content. To display, we need both height and width.
    //also add height in Card parents (Grid container line 300)
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute', // it makes card sit on the image
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

export default function LandingPage(props) {
  const classes = useStyles();
  // This makes theme available in the retun below (ButtonArrow). If it is not necessary, you can skip const theme here
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  // It is from react-lottie
  //https://github.com/chenqingspring/react-lottie
  const defaultOptions = {
    loop: true,
    autoplay: false, //stop animation autoplay for testing - turn true if you want to see animation
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
                <Button
                  component={Link}
                  to="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => props.setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButtonHero}
                  onClick={() => props.setValue(2)}
                >
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
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
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
              <Button
                component={Link}
                to="/mobileapps"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(2);
                }}
              >
                <span
                  component={Link}
                  to="/mobileapps"
                  style={{ marginRight: 10 }}
                >
                  Learn More
                </span>
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
              <Button
                component={Link}
                to="/websites"
                variant="outlined"
                className={classes.learnButton}
                onClick={() => {
                  props.setValue(1);
                  props.setSelectedIndex(3);
                }}
              >
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
      {/* column - 5 */}
      {/* Card section Revolution*/}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: '100em', marginTop: '12rem' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                  <Button
                    component={Link}
                    to="/revolution"
                    variant="outlined"
                    className={classes.learnButtonHero}
                    onClick={() => {
                      props.setValue(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/* column - 6 Information*/}
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ height: '80em' }}
        className={classes.infoBackground}
      >
        <Grid
          item
          container
          style={{
            textAlign: matchesXS ? 'center' : 'inherit',
          }}
          direction={matchesXS ? 'column' : 'row'}
        >
          {/* 1-1 */}
          <Grid
            item
            sm
            style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
          >
            <Grid
              container
              direction="column"
              style={{ marginBottom: matchesXS ? '10em' : 0 }}
            >
              <Typography variant="h2" style={{ color: 'white' }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Let's get personal.</Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  style={{
                    color: 'white',
                    borderColor: 'white',
                    backgroundColor: 'transparent',
                  }}
                  className={classes.learnButton}
                  onClick={() => {
                    props.setValue(3);
                  }}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/* 1-2 */}
          <Grid
            item
            sm
            style={{
              marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
              textAlign: matchesXS ? 'center' : 'right',
            }}
          >
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: 'white' }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">
                Say hello!
                <span role="img" aria-label="waving hand">
                  👋
                </span>
              </Typography>
              <Grid item>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  style={{
                    color: 'white',
                    borderColor: 'white',
                    backgroundColor: 'transparent',
                  }}
                  className={classes.learnButton}
                  onClick={() => {
                    props.setValue(4);
                  }}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={10} height={10} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Call to action */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
}
