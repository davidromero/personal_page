import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography}from '@material-ui/core';

const styles = theme => ({
    root: {
        flex: '1 0 100%',
      },
    card: {
        maxWidth: 600,
      },
    media: {
        height: 400,
        width: 600,
        paddingTop: '56.25%', // 16:9
      },
    hero: {
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary
    },
    text: {
      paddingTop: theme.spacing.unit * 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      letterSpacing: '.7rem',
      textIndent: '.7rem',
      fontWeight: theme.typography.fontWeightLight,
      marginTop: theme.spacing.unit,
      [theme.breakpoints.only('xs')]: {
        letterSpacing: '.3rem',
        textIndent: '.3rem',
        fontSize: 26,
      },
      whiteSpace: 'nowrap',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
      },
    headline: {
      paddingLeft: theme.spacing.unit * 4,
      paddingRight: theme.spacing.unit * 4,
      marginTop: theme.spacing.unit,
      maxWidth: 500,
      textAlign: 'center',
      [theme.breakpoints.only('xs')]: {
        fontSize: 20,
      },
    },
    content: {
      paddingBottom: theme.spacing.unit * 8,
      paddingTop: theme.spacing.unit * 8,
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing.unit * 12,
      },
    },
    logo: {
      margin: 'auto',
      width: '350px',
      height: '350px',
      display: 'block',
      [theme.breakpoints.only('xs')]: {
        width: '150px',
        height: '150px'
      },
    },
  });
  

class Projects extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <div className={classes.hero}>
        <div className={classes.content}>
          <div className={classes.text}>
            <Typography
              variant="h3"
              align="center"
              component="h2"
              color="textPrimary"
              gutterBottom
              className={classes.title}
            >
              {'What can I do?'}
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Lists of personal Projects"}
            </Typography>
          </div>
          <div className={classes.text}>
          </div>
        </div>
        </div>
        </div>
    );
  }
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles, { withTheme: true })(Projects);