// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
// Icons
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
// Components
import Container from '../Container';
import NavItem from '../NavItem';
import Button from '../Button';
// Styles
import style from './style.styl';

@connect(({ ui }) => ({
  isDataFromCache: ui.isDataFromCache,
}))
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
    isDataFromCache: PropTypes.bool,
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
    const { className, hideReloadButton, onReloadClick, isDataFromCache } = this.props;

    return (
      <React.Fragment>
        <AppBar className={cn(style.Header, className)} position="fixed">
          <Container noPaddings>
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
              {isDataFromCache &&
                !hideReloadButton && (
                  <Typography color="inherit" className={style.Header__cacheInfo}>
                    This content loaded from cache
                  </Typography>
                )}
              {hideReloadButton || (
                <Button color="inherit" onClick={onReloadClick}>
                  <RefreshIcon className={style.Header__buttonIcon} />
                  <span className={style.Header__buttonText}>Refetch</span>
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer open={this.state.navIsOpened} onClose={this.toggleNav}>
          <div tabIndex={0} role="button" onClick={this.toggleNav}>
            <List component="nav" className={style.Header__nav}>
              <NavItem to="/" text="Home" icon={HomeIcon} />
              <NavItem to="/about" text="About" icon={InfoIcon} />
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    );
  }
}
