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
import vision from '../assets/vision.svg';
import technologyAnimation from '../animations/technologyAnimation/data.json';

import CallToAction from './ui/CallToAction';

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
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}));

export default function Revolution(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  // It is from react-lottie
  //https://github.com/chenqingspring/react-lottie
  const defaultOptions = {
    loop: true,
    autoplay: false, //stop animation autoplay for testing - turn true if you want to see animation
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTope: '2em' }}>
        <Typography variant="h2" style={{ fontFamily: 'Pacifico' }}>
          The Revolution
        </Typography>
      </Grid>
      <Grid item container direction="row" className={classes.rowContainer}>
        <Grid item lg>
          <img
            src={vision}
            alt="mountain through binoclars"
            style={{ maxWidth: '40em', marginRight: '5em' }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4" align="right" gutterBottom>
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="right" paragraph>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfprt, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problesms and better
              lives is at the heart of everything we do.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              We want to help businesses capitalize on the latest and greatest
              technology, The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and inovation.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              By holding ourselves to rigorous standards and pristine quality we
              can ensure you have the absolute best tools necessary to thrive in
              this new frontier.
            </Typography>
            <Typography variant="body1" align="right" paragraph>
              We see a fitire where every individual has personalized software
              custom tailored to their lifestyle, culture, and intersts, helping
              them overcome life's obstacles. Each project is a astep towards
              that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container direction="row" className={classes.rowContainer}>
        <Grid item container direction="column" lg style={{ maxWidth: '40em' }}>
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              In 2013, Facebook invented a new way of building websites This new
              system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography variant="body1" paragraph>
              Insted of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography variant="body1" paragraph>
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Insted
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from buolding
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography variant="body1" paragraph>
              This technology is now being used by companies like AirBnBm
              Microsoftm Netflixm Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography variant="body1" paragraph>
              Developers have since built on top of these systems by automating
              prohect setup and developmentm allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography variant="body1" paragraph>
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography variant="body1" paragraph>
              This puts personalization in your pocket - faster, better, and
              more afforedable then ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justify="flex-end" lg>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: '40em', margin: 0 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
