import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography}from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloudDownloadTwoTone from '@material-ui/icons/CloudDownloadTwoTone';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  root: {
      flex: '1 0 100%',
    },
  hero: {
    flex: '0 0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary
  },
  text: {
    //paddingTop: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
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
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit,
    maxWidth: 500,
    textAlign: 'left',
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
  

class Home extends Component {

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <Paper className={classes.root} elevation={15}>
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
              {'About'}
            </Typography>
            </div>
        </div>
        </div>
            <div className={classes.text}>
          <List className={classes.text}>
            <ListItem>
            <Typography
              variant="h4"
              component="h3"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Passionate about solving daily problems with new technologies"}
            </Typography>
            </ListItem>
            </List>
          </div>
          <div className={classes.text}>
          <Button variant="contained" color="primary" className={classes.button} size="medium" href={"https://google.com"}>
        Download CV 
        <CloudDownloadTwoTone className={classes.rightIcon} />
      </Button>
          </div>
        </Paper>
        <div>
        <Paper className={classes.root} elevation={10}>
        <Typography
              variant="h3"
              align="center"
              component="h2"
              color="textPrimary"
              gutterBottom
              className={classes.title}
            >
              {"Certifications"}
            </Typography>
        </Paper>
        </div>
        <div>
        <Paper className={classes.root} elevation={10}>
        <Typography
              variant="h3"
              align="center"
              component="h2"
              color="textPrimary"
              gutterBottom
              className={classes.title}
            >
              {"Interest"}
            </Typography>
        </Paper>
        </div>
        <div>
        <Paper className={classes.root} elevation={10}>
        <Typography
              variant="h3"
              align="center"
              component="h2"
              color="textPrimary"
              gutterBottom
              className={classes.title}
            >
              {"Contact"}
            </Typography>
        </Paper>
        </div>
        </div>
    );
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles, { withTheme: true })(Home);