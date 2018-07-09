// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import uuid from 'uuid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// Components
import Button from '../Button';
// Styles
import style from './style.styl';

const Post = ({ className, data }) => (
  <Card className={cn(style.Post, className)} component="article">
    <div>
      <CardMedia
        className={style.Post__media}
        image={`https://picsum.photos/640/480/?random&hash=${uuid()}`}
        title={`${data.title} post image`}
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2" className={style.Post__title}>
          {data.title}
        </Typography>
        <Typography noWrap component="p">
          {data.body}
        </Typography>
      </CardContent>
    </div>
    <div>
      <CardActions>
        <Button to={`/post/${data.id}`} size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </div>
  </Card>
);

Post.defaultProps = {
  className: '',
};

Post.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default Post;
