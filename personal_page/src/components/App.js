import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidenav from './Sidenav';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Error from './Error';
//import Gallery from './Gallery'
//import * as Constants from '../helpers/constants';
//import Analytics from 'react-router-ga';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: [
        'Quicksand',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    palette: {
        primary: {
          main:'#0F2038',
          //dark:'#242038'
          dark:'#0F2038',
        },
        secondary: {
          //main: '#21ef8b'
          //este si
         //main: '#74d600'
         main: '#62c200'
        },
        error: {
          //main: '#21ef8b'
          main: '#acc5e9'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        type: 'dark',
          background:{
            //paper:'#332d4f',
              paper:'#0F2038',
              //default:'#242038'
              default:'#0F2038'
          },  
          action:{  
            active: "rgba(33,239,139, 0.54)",
            hover: "rgba(33,239,139, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(33,239,139, 0.14)",
            disabled: "rgba(33,239,139, 0.26)",
            disabledBackground: "rgba(33,239,139, 0.12)",
  
          },
          divider:'#332d4f',
          ripple: {
            color: '#21ef8b',
          },
    },
  });
  
  const styles = theme => ({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
    },
  });

class App extends Component {

  componentDidMount(){
    document.title = "David Romero - Personal WebSite "
  }
  render() {
    const { classes } = this.props;
    return (
      <Router>
      <MuiThemeProvider theme={theme}>
      <div className="App">
      <CssBaseline />
      <div className={classes.root}>
      <Sidenav />
      <main className={classes.content}>
      <div className={classes.toolbar} />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/skills' component={Skills} />
      <div >
    {
      //<Route exact path='/About' component={About} />
      //<Route exact path='/gallery' component={Projects} />
      //<Route exact path='/Skills' component={Skills} />
    }
      </div >
      <Route render={(props)=> <Error {...props} message="Page not found" />} />
      </Switch>
      </main>
      </div>
      </div>
      </MuiThemeProvider>
      </Router>  
    )
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  
  export default withStyles(styles, { withTheme: true })(App);