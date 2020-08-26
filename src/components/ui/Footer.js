import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import footerAdornment from '../../assets/Footer Adornment.svg';

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
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <img
        src={footerAdornment}
        alt="black decorative slash"
        className={classes.adornment}
      />
    </footer>
  );
}
