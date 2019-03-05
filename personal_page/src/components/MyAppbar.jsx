import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { MenuOutlined} from '@material-ui/icons';
//import { downloadCenterUrl, statsUrl } from '../helpers/constants';
//import { Typography,  Fab }from '@material-ui/core';

const drawerWidth = 200;

const styles = theme => ({
  appBar: {
    position: 'fixed',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  iconButton: {
    marginRight: 20,
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    MuiTouchRipple: '#000000'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
});

function MyAppBar(props) {
  const { classes } = props;
  return (
    <div>        
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="Open drawer"
            onClick={props.handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuOutlined />
          </IconButton>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAppBar);