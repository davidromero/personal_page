import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography}from '@material-ui/core';
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
  

class Skills extends Component {

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
              {'Skills'}
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
              {"Programming Languages:"}
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              color="secondary"
              gutterBottom
              className={classes.headline}
            >
              {"Java  Python  Javascript  Scala"}
            </Typography>
            </ListItem>
            <ListItem>
            <Typography
              variant="h4"
              component="h3"
              align="left"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Frameworks:"}
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              color="secondary"
              gutterBottom
              className={classes.headline}
            >
              {"bla bla bla"}
            </Typography>
            </ListItem>
            <ListItem>
            <Typography
              variant="h4"
              component="h3"
              align="left"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Databases:"}
            </Typography>
            </ListItem>
            <ListItem>
            <Typography
              variant="h4"
              component="h3"
              align="left"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Various:"}
            </Typography>
            <Typography
              variant="h4"
              component="h3"
              color="secondary"
              gutterBottom
              className={classes.headline}
            >
              {"Github  Docker"}
            </Typography>
            </ListItem>
            </List>
          </div>
        </Paper>
        </div>
    );
  }
}

Skills.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles, { withTheme: true })(Skills);