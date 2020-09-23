import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import integrationAnimation from '../animations/integrationAnimation/data.json';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
      paddingTop: '1em',
    },
  },
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
}));

export default function MobileApps(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false, //stop animation autoplay for testing - turn true if you want to see animation
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        justify={matchesMD ? 'center' : undefined}
        style={{ marginTop: matchesXS ? '1em' : '2em' }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: '1em', marginleft: '-3.5em' }}
          >
            <IconButton
              style={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/customsoftware"
              onClick={() => props.setSelectedIndex(1)}
            >
              <img
                src={backArrow}
                alt="Back to Custom Software Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
              iOS/Android App Development
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Mobile apps allow you to tale your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-ppatform native solutions for any
              part of your business process, This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Conenient. Connection
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              tyle={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/websites"
              onClick={() => props.setSelectedIndex(3)}
            >
              <img
                src={forwardArrow}
                alt="Forward to iO/Android App Development page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid item container direction="row" className={classes.rowContainer}>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" gutterButton>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variation="body1" paragraph>
              Our technology enables an innate interconnection betweenweb and
              mobile applications, utting everything you read right in one
              convenient place.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variation="body1" paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>

        <Grid item md>
          <Lottie options={defaultOptions} />
        </Grid>

        <Grid item container direction="column" md>
          <Grid item>
            <Typography variant="h4" align="right" gutterButton>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography variation="body1" align="right" paragraph>
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets = al at the same time.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variation="body1" align="right" paragraph>
              This significantly reduces consts and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
