// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Styles
import style from './style.styl';

const Container = ({ className, children, noPaddings }) => {
  const classes = cn({
    [style.Container]: true,
    [style.Container_noPaddings]: noPaddings,
    [className]: className,
  });

  return <div className={classes}>{children}</div>;
};

Container.defaultProps = {
  className: '',
  noPaddings: false,
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  noPaddings: PropTypes.bool,
};

export default Container;
