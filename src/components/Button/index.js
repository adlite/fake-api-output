// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MaterialButton from '@material-ui/core/Button';

const Button = ({ to, ...props }) => {
  const button = <MaterialButton {...props} />;

  if (to) {
    return <Link to={to}>{button}</Link>;
  }
  return button;
};

Button.defaultProps = {
  className: '',
  to: '',
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
