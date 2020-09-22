import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import backArrow from '../../assets/backArrow.svg';
import forwardArrow from '../../assets/forwardArrow.svg';
import lightbulb from '../../assets/bulb.svg';
import cash from '../../assets/cash.svg';
import stopwatch from '../../assets/stopwatch.svg';
import roots from '../../assets/root.svg';

import documentsAnimation from '../../animations/documentsAnimation/data';
import scaleAnimation from '../../animations/scaleAnimation/data.json';
import automationAnimation from '../../animations/automationAnimation/data.json';
import uxAnimation from '../../animations/uxAnimation/data';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    paddingTop: '2em',
    paddingBottom: '10em',
  },
  heading: {
    maxWidth: '40em',
  },
  arrowContainer: {
    marginTop: '0.5em',
  },
  itemContainer: {
    maxWidth: '40em',
  },
}));

export default function CustomSoftware(props) {
  const classes = useStyles();

  // It is from react-lottie
  //https://github.com/chenqingspring/react-lottie
  const documentsOptions = {
    loop: true,
    autoplay: false, //stop animation autoplay for testing - turn true if you want to see animation
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const scaleOptions = {
    loop: true,
    autoplay: false, //stop animation autoplay for testing - turn true if you want to see animation
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const automationOptions = {
    loop: true,
    autoplay: false, //stop animation autoplay for testing - turn true if you want to see animation
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: false, //stop animation autoplay for testing - turn true if you want to see animation
    animationData: uxAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item container direction="row">
        <Grid
          item
          className={classes.arrowContainer}
          style={{ marginRight: '1em', marginleft: '-3.5em' }}
        >
          <IconButton
            style={{ backgroundColor: 'transparent' }}
            component={Link}
            to="/services"
            onClick={() => props.setSelectedIndex(0)}
          >
            <img src={backArrow} alt="Back to Service Page" />
          </IconButton>
        </Grid>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2">Custom Software Development</Typography>
          </Grid>

          <Grid item>
            <Typography variant="body1" paragraph>
              Whether we're replacing old software or invention new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body1" paragraph>
              using regular commercial software leaves you with a lot of stuff
              you don't need, without some of the stuff you do need, and
              ultimately controles the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Our custom solutions are designed from the ground up with you
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improveing your workflow and reducing costs that generalized
              options.
            </Typography>
            <Typography variant="body1" paragraph>
              We create exacty what you want, exactrly how you want it.
            </Typography>
          </Grid>
        </Grid>

        <Grid item className={classes.arrowContainer}>
          <IconButton
            tyle={{ backgroundColor: 'transparent' }}
            component={Link}
            to="/mobileapps"
            onClick={() => props.setSelectedIndex(2)}
          >
            <img
              src={forwardArrow}
              alt="Forward to iO/Android App Development page"
            />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: '15em', marginBottom: '20em' }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Cash</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          md
          style={{ maxWidth: '40em' }}
        >
          <Grid item>
            <Typography variant="h4">Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        justify="space-around"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="row"
          className={classes.itemContainer}
          md // container stayes each pther until medium
        >
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4">Digital Documents & Data</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Redcuce Errors.Reduce Waste.Redyce Costs.
              </Typography>
              <Typography variant="body1" paragraph>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper.On top of the massive environmental impact
                this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph>
                By utilizing digital forms and documents you can remove these
                obsolete expensesm accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={documentsOptions}
              isStopped={true} // if you want to auto animation, get rid of this
              style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="row"
          className={classes.itemContainer}
          md
        >
          <Grid item md>
            <Lottie
              options={scaleOptions}
              style={{ maxHeight: 260, maxWidth: 280 }}
            />
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" align="right">
                Scale
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                Whether you're a large brand, just getting started, or talomg
                pff rogjt now, our apliation architecture ensures pain free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        style={{ marginTop: '20em', marginBottom: '20em' }}
      >
        <Grid item container direction="column" alignItems="center">
          <img
            src={roots}
            alt="tree with roots extending out"
            height="450em"
            width="450em"
          />
        </Grid>
        <Grid item className={classes.itemContainer}>
          <Typography variant="h4" align="center" gutterBottom>
            Root-Cause Analysis
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Many problems are merely symptoms of larger, underlying issues.
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            We can help you throughly examine all areas of your business to
            develop a holistic plan for the most effective implementation of
            technology.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        justify="space-around"
        className={classes.rowContainer}
      >
        <Grid
          item
          container
          direction="row"
          className={classes.itemContainer}
          md // container stayes each pther until medium
        >
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4">Automation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                Why waste time when you don't have to?
              </Typography>
              <Typography variant="body1" paragraph>
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography variant="body1" paragraph>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork.
              </Typography>
            </Grid>
          </Grid>

          <Grid item md>
            <Lottie
              options={automationOptions}
              isStopped={true} // if you want to auto animation, get rid of this
              style={{ maxHeight: 290, maxWidth: 280 }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="row"
          className={classes.itemContainer}
          md
        >
          <Grid item md>
            <Lottie
              options={uxOptions}
              style={{ maxHeight: 310, maxWidth: 155 }}
            />
          </Grid>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" align="right">
                User Experience Desgin
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1" align="right" paragraph>
                A good design that isn't usable isn't a good design
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                So why are so mamy pieces of software complicated, confusing,
                and frustraiting?
              </Typography>
              <Typography variant="body1" align="right" paragraph>
                By prioritizing users and the real ways they interact with
                technology we're able to develop unique, personabe experiences
                that solve problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
