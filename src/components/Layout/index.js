// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// Components
import Container from '../Container';
// Styles
import style from './style.styl';

const Layout = ({ children, title }) => {
  return (
    <div className={style.Layout}>
      <Helmet title={`Fake API Output App | ${title}`} />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={style.Layout__burger} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={style.Layout__title}>
            Fake API Output App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main className={style.Layout__main}>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
