import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles, Typography} from '@material-ui/core';
//import Icon from '@mdi/react';
//import * as Mdi from '@mdi/js';
//import footerLinks from '../helpers/footerLinks';

const styles = theme => ({
  footerLinks: {
    backgroundColor: theme.palette.primary.dark,
    padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerCredits: {
    padding: theme.spacing.unit,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    MuiTouchRipple: '#000000',
    color: theme.palette.text.secondary
  },
});

class Footer extends Component {
  render() {
    const { classes} = this.props;
    return (
      <div>
      <div className={classes.footerCredits}>
      <Typography
      color="secondary"
      variant="h5"
      >
      {'Built with '}
      <span role="img" aria-label="Love">
        ❤️
      </span>
      {' by '}
      <a className={classes.link} color="secondary" href="https://github.com/davidromero/personal_page">
        David Romero
      </a>
    </Typography>
      </div>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Footer);