import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography}from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FrameworkIcon from '@material-ui/icons/DashboardTwoTone';
import DatabaseIcon from '@material-ui/icons/AssignmentTwoTone';
import LanguageIcon from '@material-ui/icons/LanguageTwoTone';
import VariousIcon from '@material-ui/icons/CloudTwoTone';

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
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit,
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
  

class Skills extends Component {

  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
        <Paper className={classes.root} elevation={24}>
        <div className={classes.hero}>
        <div className={classes.content}>
          <div className={classes.text}>
            <Typography
              variant="h4"
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
            <ListItem button>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
            <Typography
              variant="h5"
              component="h3"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Programming Languages:"}
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              color="secondary"
              gutterBottom
              className={classes.headline}
            >
              {"Python    Java    C#/C++    SQL   Javascript"}
            </Typography>
            </ListItem>
            <Paper className={classes.root} elevation={1}>
            <ListItem button>
              <ListItemIcon>
                <FrameworkIcon />
              </ListItemIcon>
            <Typography
              variant="h5"
              component="h3"
              align="left"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Frameworks:"}
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              color="secondary"
              gutterBottom
              
              className={classes.headline}
            >
              {".Net    React   NumPy"}
            </Typography>
            </ListItem>
            </Paper>
            <Paper className={classes.root} elevation={1}>
            <ListItem button>
              <ListItemIcon>
                <DatabaseIcon />
              </ListItemIcon>
            <Typography
              variant="h5"
              component="h3"
              align="left"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Databases:"}
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              color="secondary"
              gutterBottom
              className={classes.headline}
            >
              {"MySQL    Oracle    MongoDB   Redis    DynamoDB"}
            </Typography>
            </ListItem>
            </Paper>
            <Paper className={classes.root} elevation={1}>
            <ListItem button>
            <ListItemIcon>
                <VariousIcon />
              </ListItemIcon>
            <Typography
              variant="h5"
              component="h3"
              align="left"
              color="textSecondary"
              gutterBottom
              className={classes.headline}
            >
              {"Various:"}
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              color="secondary"
              gutterBottom
              className={classes.headline}
            >
              {"AWS Cloud Git Docker Bash PowerShell Excel"}
            </Typography>
            </ListItem>
            </Paper>
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