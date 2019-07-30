import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography}from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ReceiptIcon from '@material-ui/icons/ReceiptTwoTone';

const styles = theme => ({
    root: {
        flex: '1 0 100%',
      },
    card: {
        maxWidth: 600,
      },
      paper2: {
        padding: theme.spacing.unit * 1,
        flex: '0 0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.text.secondary,
      },
      root2: {
        flexGrow: 1,
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
      //paddingTop: theme.spacing.unit * 2,
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
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
        marginTop: theme.spacing.unit * 1,
        display: 'auto',
      },
    headline: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit,
      maxWidth: 500,
      textAlign: 'center',
      [theme.breakpoints.only('xs')]: {
        fontSize: 20,
      },
    },
    content: {
      paddingBottom: theme.spacing.unit * 4,
      paddingTop: theme.spacing.unit * 4,
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing.unit * 6,
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
            <Typography
              variant="h4"
              align="center"
              component="h2"
              color="textPrimary"
              gutterBottom
              className={classes.title}
            >
              {'Personal Projects'}
            </Typography>
        </div>
        </div>
        <div>
          <Paper className={classes.root2} elevation={24}>
          <Typography
                variant="h5"
                align="left"
                textAlign="left"
                component="h2"
                color="textPrimary"
                gutterBottom
                className={classes.text}
              >
                {"[React] CRUD Web App"}
            </Typography>
            <div className={classes.button}>
          <Button target="_blank" variant="outlined" color="secondary" className={classes.button} size="large" href={"http://autoai.davidromero.xyz/#/"}>
          Live Demo
        <ReceiptIcon className={classes.rightIcon} />
      </Button>
          </div>
            <div className={classes.button}>
          <Button target="_blank" variant="outlined" color="secondary" className={classes.button} size="large" href={"https://github.com/davidromero/CRUDapp"}>
          View Code
        <ReceiptIcon className={classes.rightIcon} />
      </Button>
          </div>
          </Paper>

          <List className={classes.text}>
            <ListItem>
            <Typography
              variant="h6"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {"Basic funcionalities project, Create, Read, Update and Delete. Using react as frontend and ExpressJS as backend."}
            </Typography>
            </ListItem>
            </List>
            <Grid direction="column" justify="space-space-evenly" alignItems="center">
              <Grid item xs>
                <Paper className={classes.paper2}>
                  <img src={require('../images/CRUD1.png')} alt="CRUD Web 1" style={{
                    display: 'block',
                    width: '100%',
                    margin: 'auto',
                  }}/>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper2}>
                  <img src={require('../images/CRUD2.png')} alt="CRUD Web 1" style={{
                    display: 'block',
                    width: '100%',
                    margin: 'auto',
                  }}/>
                </Paper>
              </Grid>
            </Grid>
            <Typography
              variant="h6"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {" "}
            </Typography>
          </div>
          <div>
          <Paper className={classes.root2} elevation={24}>
          <Typography
                variant="h5"
                align="left"
                textAlign="left"
                component="h2"
                color="textPrimary"
                gutterBottom
                className={classes.text}
              >
                {"[Java] Bag of Words - Naive Bayes"}
            </Typography>
            <div className={classes.button}>
          <Button target="_blank" variant="outlined" color="secondary" className={classes.button} size="large" href={"https://github.com/davidromero/Bag_of_Words"}>
          View Code
        <ReceiptIcon className={classes.rightIcon} />
      </Button>
          </div>
          </Paper>

          <List className={classes.text}>
            <ListItem>
            <Typography
              variant="h6"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {"Bag of words classification project using a Naive Bayes probabilistic model. The program takes a text file to train itself, counting every word associated with the tag and it calculates the probability of an outcome given a word."}
            </Typography>
            </ListItem>
            </List>
            <Grid direction="column" justify="space-space-evenly" alignItems="center">
              <Grid item xs>
                <Paper className={classes.paper2}>
                  <img src={require('../images/bag_of_words1.png')} alt="CRUD Web 1" style={{
                    display: 'block',
                    width: '100%',
                    margin: 'auto',
                  }}/>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper2}>
                  <img src={require('../images/bag_of_words2.png')} alt="CRUD Web 1" style={{
                    display: 'block',
                    width: '100%',
                    margin: 'auto',
                  }}/>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>
    );
  }
}

Projects.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles, { withTheme: true })(Projects);