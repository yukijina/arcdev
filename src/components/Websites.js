import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';

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
  paragraphContainer: {
    maxWidth: '30em',
  },
}));

export default function Websites(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
              to="/mobileapps"
              onClick={() => props.setSelectedIndex(2)}
            >
              <img
                src={backArrow}
                alt="Back to iOS/Android App Development Page"
              />
            </IconButton>
          </Grid>
        </Hidden>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
              Website Development
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              Havin a website is a necessary in today's business wourld. They
              give you one central, public location to let people ow who you
              are, what you do, and why you're the best at it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? 'center' : undefined}
            >
              From simple having your hours posted to having a full fledged
              online store, making yourself as accessible as possibe to users
              online drivers growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>

        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              tyle={{ backgroundColor: 'transparent' }}
              component={Link}
              to="/services"
              onClick={() => props.setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt="Forward to Service page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>

      <Grid
        item
        container
        direction="row"
        alignItems="center"
        className={classes.rowContainer}
      >
        {/* We don't want container 100% width so we separate item and container here */}
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                style={{ marginLeft: '-2.75rem' }}
                alt="graph with magnifying glass revealing 1's and 0's"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.paragraphContainer}>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden paatterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
