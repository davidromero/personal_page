import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNoteIcon from '@material-ui/icons/MusicNoteOutlined';
//import Collapse from '@material-ui/core/Collapse';
//import ExpandLess from '@material-ui/icons/ExpandLess';
//import ExpandMore from '@material-ui/icons/ExpandMore';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MyAppbar from './MyAppbar';
import Footer from './Footer';
import {Link} from 'react-router-dom';
import { HomeOutlined, BuildOutlined, FolderTwoTone, LocalLibraryOutlined } from '@material-ui/icons/';
import Typography from '@material-ui/core/Typography';
//import androidVersions from '../helpers/androidVersions.json';

const drawerWidth = 200;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  icon: {
    color: theme.palette.secondary.main
  },
  grow: {
    flexGrow: 1,
  },
  toolbarIe11: {
    display: 'flex',
  },
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-center',
    justifyContent: 'center',
  },
  drawerPaper: {
    width: drawerWidth
  },
  nested: {
    paddingLeft: theme.spacing.unit * 6,
  },
  link: {
    textDecoration: 'none',
    MuiTouchRipple: '#000000'
  },
  title: {
    align:'center',
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing.unit / 2,

  },
  buttonRipple: { color: "#21ef8b" },
});

class Sidenav extends React.Component {
  state = {
    mobileOpen: false,
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleClick = () => {
    this.setState(state => ({ 
      open:!this.state.open
     }));
  };

  render() {
    const { classes } = this.props;

    const drawer = (
      <div>
        <div  className={classes.toolbar}>
        <Link className={classes.title} to="/" onClick={this.handleDrawerToggle}>
          <Typography variant="h5" className={classes.title} component="h3" align="center">David Romero</Typography>
      </Link>
        </div>
        <Divider />
          <List component="nav"
          subheader={<ListSubheader component="div"></ListSubheader>}>
          <Link to={"/"} className={classes.link} onClick={this.handleDrawerToggle}>
          <ListItem button key='home' TouchRippleProps={{ classes: { root: classes.buttonRipple }}} >
          <ListItemIcon>
            <HomeOutlined className={classes.icon} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant="h5">About</Typography>} key='about' />
          </ListItem>
          </Link>
          <Link to={"/skills"} className={classes.link} onClick={this.handleDrawerToggle}>
          <ListItem button key='skills' TouchRippleProps={{ classes: { root: classes.buttonRipple }}} >
          <ListItemIcon>
            <BuildOutlined className={classes.icon} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant="h5">Skills</Typography>} key='skills'/>
          </ListItem>
          </Link>
          <Link to={"/projects"} className={classes.link} onClick={this.handleDrawerToggle}>
          <ListItem button key='projects' TouchRippleProps={{ classes: { root: classes.buttonRipple }}} >
          <ListItemIcon>
            <FolderTwoTone className={classes.icon} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant="h5">Projects</Typography>} key='projects' />
          </ListItem>
          </Link>
          <a href={"https://github.com/davidromero"} target="_blank" rel="noopener noreferrer"  className={classes.link}>
          <ListItem button key='Github' TouchRippleProps={{ classes: { root: classes.buttonRipple }}} >
          <ListItemIcon>
            <LocalLibraryOutlined className={classes.icon} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant="h5">Github</Typography>} key='github' />
          </ListItem>
          </a>
          <a href={"https://soundcloud.com/d-14r"} target="_blank" rel="noopener noreferrer"  className={classes.link}>
          <ListItem button key='my music' TouchRippleProps={{ classes: { root: classes.buttonRipple }}} >
          <ListItemIcon>
            <MusicNoteIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText disableTypography primary={<Typography variant="h5">My Music</Typography>} key='my music' />
          </ListItem>
          </a>
          </List>
      </div>
    );

    return (
      <div>
        <MyAppbar handleDrawerToggle={this.handleDrawerToggle}/>
        <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Drawer
            variant="temporary"
            anchor='left'
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
            <div className={classes.grow} />
            <Footer />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
            <div className={classes.grow} />
            <Footer />
          </Drawer>
        </Hidden>
        </nav>
      </div>
    );
  }
}

Sidenav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sidenav);