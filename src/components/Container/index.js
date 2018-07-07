// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Styles
import style from './style.styl';

const Container = ({ className, children }) => (
  <div className={cn(style.Container, className)}>{children}</div>
);

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Container;
