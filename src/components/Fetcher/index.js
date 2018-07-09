// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
// Components
// import Component from '../Component';
// Styles
import style from './style.styl';

// TODO: add error handling
const Fetcher = ({ className, children, isLoading, innerRef }) => {
  const classes = cn({
    [style.Fetcher]: true,
    [style.Fetcher_loading]: isLoading,
    [className]: className,
  });

  return (
    <div className={classes} ref={innerRef}>
      {isLoading ? <CircularProgress className={style.Fetcher__spinner} size={45} /> : children}
    </div>
  );
};

Fetcher.defaultProps = {
  className: '',
  children: null,
  innerRef: () => null,
};

Fetcher.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool.isRequired,
  innerRef: PropTypes.func,
};

export default Fetcher;
