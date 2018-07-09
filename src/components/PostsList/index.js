// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
// Components
import Post from '../Post';

const PostsList = ({ className, data }) => (
  <Grid container spacing={24} className={cn(className)}>
    {data.map(post => (
      <Grid item xs={12} sm={6} key={post.id}>
        <Post data={post} />
      </Grid>
    ))}
  </Grid>
);

PostsList.defaultProps = {
  className: '',
};

PostsList.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
};

export default PostsList;
