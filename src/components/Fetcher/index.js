// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
// Components
// import Component from '../Component';
// Styles
import style from './style.styl';

// TODO: add error handling
const Fetcher = ({ className, children, isLoading, innerRef, error }) => {
  const classes = cn({
    [style.Fetcher]: true,
    [style.Fetcher_visible]: isLoading || error,
    [className]: className,
  });

  return (
    <div className={classes} ref={innerRef}>
      {error ? (
        <Typography>{error}</Typography>
      ) : isLoading ? (
        <CircularProgress className={style.Fetcher__spinner} size={45} />
      ) : (
        children
      )}
    </div>
  );
};

Fetcher.defaultProps = {
  className: '',
  children: null,
  error: null,
  innerRef: () => null,
};

Fetcher.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool.isRequired,
  innerRef: PropTypes.func,
  error: PropTypes.string,
};

export default Fetcher;
