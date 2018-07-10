// Vendor
import React from 'react';
import PropTypes from 'prop-types';

const GridWrapper = ({ children, spacing, ...props }) => (
  <div style={{ padding: spacing / 2 }} {...props}>
    {children}
  </div>
);

GridWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.number.isRequired,
};

export default GridWrapper;
