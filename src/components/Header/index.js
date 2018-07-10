// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
// Icons
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
// Components
import Container from '../Container';
// Styles
import style from './style.styl';

export default class Header extends PureComponent {
  static defaultProps = {
    className: '',
    hideReloadButton: false,
    onReloadClick: () => null,
  };

  static propTypes = {
    className: PropTypes.string,
    onReloadClick: PropTypes.func,
    hideReloadButton: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {
      navIsOpened: false,
    };
  }

  toggleNav = () => {
    this.setState({
      navIsOpened: !this.state.navIsOpened,
    });
  };

  render() {
    const { className, hideReloadButton, onReloadClick } = this.props;

    return (
      <React.Fragment>
        <AppBar className={cn(style.Header, className)} position="fixed">
          <Container>
            <Toolbar disableGutters>
              <IconButton
                className={style.Header__burger}
                onClick={this.toggleNav}
                color="inherit"
                aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={style.Header__title}>
                <Link to="/">Fake API Output App</Link>
              </Typography>
              {hideReloadButton || (
                <IconButton color="inherit" onClick={onReloadClick}>
                  <RefreshIcon />
                </IconButton>
              )}
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer open={this.state.navIsOpened} onClose={this.toggleNav}>
          <div tabIndex={0} role="button" onClick={this.toggleNav}>
            <List component="nav" className={style.Header__nav}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}
