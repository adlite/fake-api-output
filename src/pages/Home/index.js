// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Layout from '../../components/Layout';
import Fetcher from '../../components/Fetcher';
import PostsList from '../../components/PostsList';
// Actions
import * as actions from '../../store/modules/posts';

@connect(({ posts }) => ({ posts }))
class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    this.props.dispatch(actions.postsFetch());
  };

  render() {
    const { posts, dispatch } = this.props;

    return (
      <Layout title="Home" gutterBottom={!posts.nextPage.hasMore} onReloadClick={this.fetchPosts}>
        <Fetcher isLoading={posts.isFetching} error={posts.error}>
          <PostsList posts={posts} dispatch={dispatch} />
        </Fetcher>
      </Layout>
    );
  }
}

export default Home;
