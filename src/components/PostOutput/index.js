// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import _get from 'lodash.get';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
// Styles
import style from './style.styl';

const PostOutput = ({ className, data }) => {
  const username = _get(data, 'user.name', '');
  return (
    <div className={cn(style.PostOutput, className)}>
      <img className={style.PostOutput__preview} src={data.preview} alt={`${data.title} preview`} />
      <Typography
        className={style.PostOutput__title}
        variant="display2"
        component="h1"
        gutterBottom>
        {data.title}
      </Typography>
      <Typography
        className={style.PostOutput__body}
        variant="subheading"
        component="h1"
        gutterBottom>
        {data.body}
      </Typography>
      <Link to={`/user/${data.userId}`}>
        <Chip avatar={<Avatar>{username[0]}</Avatar>} label={username} clickable />
      </Link>
    </div>
  );
};

PostOutput.defaultProps = {
  className: '',
};

PostOutput.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default PostOutput;
