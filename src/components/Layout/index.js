// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Icons
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
// Components
import Container from '../Container';
// Styles
import style from './style.styl';

const Layout = ({ children, title, gutterBottom, hideReloadButton, onReloadClick }) => {
  const classes = cn({
    [style.Layout]: true,
    [style.Layout_gutterBottom]: gutterBottom,
  });

  return (
    <div className={classes}>
      <Helmet title={`Fake API Output App | ${title}`} />
      <AppBar position="fixed">
        <Container>
          <Toolbar disableGutters>
            <IconButton className={style.Layout__burger} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={style.Layout__title}>
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
      <main className={style.Layout__main}>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

Layout.defaultProps = {
  gutterBottom: false,
  hideReloadButton: false,
  onReloadClick: () => null,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  gutterBottom: PropTypes.bool,
  onReloadClick: PropTypes.func,
  hideReloadButton: PropTypes.bool,
};

export default Layout;
