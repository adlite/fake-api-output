// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Helmet from 'react-helmet';
// Components
import Container from '../Container';
import Header from '../Header';
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
      <Header onReloadClick={onReloadClick} hideReloadButton={hideReloadButton} />
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
