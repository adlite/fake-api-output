// Vendor
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// Components
import Layout from '../../components/Layout';
// Actions
import * as actions from '../../store/modules/posts';

@connect()
class Home extends PureComponent {
  componentDidMount() {
    this.props.dispatch(actions.postsFetch());
  }

  render() {
    return <Layout>Hello World</Layout>;
  }
}

export default Home;
