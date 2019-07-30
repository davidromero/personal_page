import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography}from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloudDownloadTwoTone from '@material-ui/icons/CloudDownloadTwoTone';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
      flex: '1 0 100%',
    },
  root2: {
      flexGrow: 1,
    },
  paper2: {
      padding: theme.spacing.unit * 1,
      flex: '0 0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary,
    },
  card: {
      maxWidth: 345,
    },
  media: {
      height: 0,
      display: 'block',
      margin: 'auto',
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
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing.unit * 3,
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
        <Paper className={classes.root} elevation={24}>
        <div className={classes.hero}>
        <div className={classes.content}>
          <div>
            <Typography
              variant="h4"
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

        </Paper>
        <div className={classes.text}>
          <List className={classes.text}>
            <ListItem>
            <Typography
              variant="body1"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {"I am David, a easy going guy from Guatemala. I am a software engineer (not yet!), I studied at Universidad Rafael Landívar. I am passionate about everything related to technology, more recent Cloud-Based Technologies."}
            </Typography>
            </ListItem>
            <ListItem>
            <Typography
              variant="body1"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {"I belive that creativity, enthusiasm and knowledge surrounding technology are the elementes that make this industry thrive. I am strict and committed when it comes to professional roles but I also enjoy my own time, you could find me at the pool the weekends or in a local music event."}
            </Typography>
            </ListItem>
            </List>
          </div>
          <div className={classes.button}>
          <Button target="_blank" variant="outlined" color="secondary" className={classes.button} size="large" href={"https://cvdavidromero.s3.us-east-2.amazonaws.com/cv_aws_DavidRomero.pdf"}>
          Download CV
        <CloudDownloadTwoTone className={classes.rightIcon} />
      </Button>
          </div>
          <div>
          
          <Paper className={classes.root} elevation={24}>
          <Typography
                variant="h4"
                align="center"
                component="h2"
                color="textPrimary"
                gutterBottom
                className={classes.title}
              >
                {"Interest"}
              </Typography>
          </Paper>
          <List className={classes.text}>
            <ListItem>
            <Typography
              variant="body1"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {"I am part of a local Artificial Intelligence Group, we share books and give talks, we are always learning. Join Us on Telegram!"}
            </Typography>
            </ListItem>
            <Button target="_blank" variant="outlined" color="secondary" className={classes.button} size="small" href={"https://t.me/iaguate"}>
                Join the Telegram Channel Here
              <CloudDownloadTwoTone className={classes.rightIcon} />
            </Button>
            <ListItem>
            <Typography
              variant="body1"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {"I like to design sounds and make experimental music, check the sidebar for my SoundCloud link. In a near future I would like to start a personal project called 'Recuerdos Sonoros de una Guatemala Cambiante' where I record the always changing sounds of my beautiful Guatemala."}
            </Typography>
            </ListItem>
            </List>
          </div>
          <div>
          <Paper className={classes.root} elevation={24}>
          <Typography
                variant="h4"
                align="center"
                component="h2"
                color="textPrimary"
                gutterBottom
                className={classes.title}
              >
                {"Contact"}
            </Typography>
          </Paper>
          <List className={classes.text}>
            <ListItem>
            <Typography
              variant="body1"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {"E-mail: d-romero@live.com"}
            </Typography>
            </ListItem>
            <ListItem>
            <Typography
              variant="body1"
              component="h3"
              color="error"
              align="left"
              gutterBottom
              className={classes.content}
            >
              {"Telegram: +(502) 40303202"}
            </Typography>
            </ListItem>
            </List>
          </div>
        <div>
        <Paper className={classes.root} elevation={24}>
        <Typography
              variant="h4"
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

      <div className={classes.root2}>
      <Grid justify="space-between" alignItems="center" container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper2}>
            <img src={require('../images/AWS_Essentials.png')} alt="AWS_Essentials" style={{
          display: 'block',
          width: '90%',
          margin: 'auto',
        }}/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper2}>
            <img src={require('../images/LPI_Linux_Essentials.png')} alt="LPI_Linux_Essentials" style={{
          display: 'block',
          width: '90%',
          margin: 'auto',
        }}/>
          </Paper>
        </Grid>
      </Grid>
      <Grid justify="space-between" alignItems="center" container spacing={2}>
        <Grid item xs>
          <Paper className={classes.paper2}>
            <img src={require('../images/FullStack_Serverless_AWS.png')} alt="FullStack_Serverless_AWS" style={{
          display: 'block',
          width: '90%',
          margin: 'auto',
        }}/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper2}>
            <img src={require('../images/DevOps_Essentials.png')} alt="DevOps_Essentials" style={{
          display: 'block',
          width: '90%',
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

Home.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
export default withStyles(styles, { withTheme: true })(Home);