import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import history from '../assets/history.svg';

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
  missionStatement: {
    fontStyle: 'italic',
    fontWeight: 300,
    fontSize: '1.5rem',
    maxWidth: '50em',
    lineHeight: 1.4,
  },
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: '2em' }}>
        <Typography variant="h2">About Us</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an indivisual
          to their interestsm techonology is meant to brign us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        justify="space-around"
      >
        <Grid item>
          {/* Column */}
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: '35em' }}
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                style={{ fontWeight: 700, fontStyle: 'italic' }}
              >
                We're the new kid on the block
              </Typography>
              <Typography variant="body1" paragraph>
                Founded in 2019, we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography variant="body1" paragraph>
                It all started with one question: Why are'nt all business using
                available technology? There are many different answers to that
                question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body1" paragraph>
                We aim to be a powerfu; force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compouinded by the proliferation of smart phones, has opened up
                infinite worlds of possiblity. Things that have always been done
                by hand can now be done digitally and autonatically, and
                completely new methods of interacitions are created daily.
                Taking ful advantage of these advancements is the name of the
                game.
              </Typography>
              <Typography variant="body1" paragraph>
                All this change can be a lot to keep uo with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book"
              style={{ maxHeight: '22em' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
