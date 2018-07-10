// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Layout from '../../components/Layout';
import Fetcher from '../../components/Fetcher';
import PostOutput from '../../components/PostOutput';
// Actions
import * as actions from '../../store/modules/post';

@connect(({ post }) => ({ post }))
class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(actions.postFetchIfNeeded(id));
  }

  reloadPost = () => {
    const { id } = this.props.match.params;
    this.props.dispatch(actions.postFetch(id));
  };

  render() {
    const { post } = this.props;

    return (
      <Layout
        title={post.data.title || post.error || 'Post page'}
        onReloadClick={this.reloadPost}
        gutterBottom>
        <Fetcher isLoading={post.isFetching} error={post.error}>
          <PostOutput data={post.data} />
        </Fetcher>
      </Layout>
    );
  }
}

export default Post;
