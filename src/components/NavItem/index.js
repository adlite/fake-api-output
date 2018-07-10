// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Route, Link } from 'react-router-dom';
// Components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// Styles
import style from './style.styl';

const NavItem = ({ className, to, text, icon }) => {
  const IconComponent = icon;

  return (
    <Route
      path={to}
      children={({ match }) => (
        <Link to={to}>
          <ListItem
            className={cn(style.NavItem, className, {
              [style.NavItem_active]: match && match.isExact,
            })}
            button>
            <ListItemIcon>
              <IconComponent />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
      )}
    />
  );
};

NavItem.defaultProps = {
  className: '',
};

NavItem.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

export default NavItem;
