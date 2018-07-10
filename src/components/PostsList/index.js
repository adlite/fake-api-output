// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Actions
import * as actions from '../../store/modules/posts';
// Components
import Post from '../Post';
import Fetcher from '../Fetcher';

export default class PostsList extends PureComponent {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  fetcherElement = null;

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.fetcherElement) {
      const fetcherCoords = this.fetcherElement.getBoundingClientRect();
      const { nextPage } = this.props.posts;
      if (fetcherCoords.top < window.innerHeight) {
        if (!nextPage.isFetching && nextPage.hasMore && !nextPage.error) {
          this.loadMorePosts(nextPage.page + 1);
        }
      }
    }
  };

  bindFetcherRef = element => {
    if (element) {
      this.fetcherElement = element;
    }
  };

  loadMorePosts = page => {
    this.props.dispatch(actions.postsFetchNext(page));
  };

  renderPosts() {
    return (
      <Grid container spacing={24}>
        {this.props.posts.data.map(post => (
          <Grid item xs={12} sm={6} key={post.id}>
            <Post data={post} />
          </Grid>
        ))}
      </Grid>
    );
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.data.length > 0 ? (
          this.renderPosts()
        ) : (
          <Typography align="center">There are no posts</Typography>
        )}
        {posts.nextPage.hasMore && (
          <Fetcher innerRef={this.bindFetcherRef} error={posts.nextPage.error} isLoading />
        )}
      </div>
    );
  }
}
