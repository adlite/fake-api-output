// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
// Components
// import Component from '../Component';
// Styles
import style from './style.styl';

const Fetcher = ({ className, children, isLoading }) => {
  const classes = cn({
    [style.Fetcher]: true,
    [style.Fetcher_loading]: isLoading,
    [className]: className,
  });

  return (
    <div className={classes}>
      {isLoading ? <CircularProgress className={style.Fetcher__spinner} size={45} /> : children}
    </div>
  );
};

Fetcher.defaultProps = {
  className: '',
};

Fetcher.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Fetcher;
