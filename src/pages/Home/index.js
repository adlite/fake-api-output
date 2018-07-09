// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Layout from '../../components/Layout';
import Fetcher from '../../components/Fetcher';
// Actions
import * as actions from '../../store/modules/posts';

@connect(({ posts }) => ({ posts }))
class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(actions.postsFetch());
  }

  render() {
    const { posts } = this.props;

    return (
      <Layout title="Home">
        <Fetcher isLoading={posts.isFetching}>
          {posts.data.map(post => <p key={post.id}>{post.body}</p>)}
        </Fetcher>
      </Layout>
    );
  }
}

export default Home;
