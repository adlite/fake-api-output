// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Layout from '../../components/Layout';
import Fetcher from '../../components/Fetcher';
// Actions
import * as actions from '../../store/modules/user';

@connect(({ user }) => ({ user }))
class User extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(actions.userFetch(id));
  }

  render() {
    const { user } = this.props;

    return (
      <Layout title="User">
        <Fetcher isLoading={user.isFetching} error={user.error}>
          User page
        </Fetcher>
      </Layout>
    );
  }
}

export default User;
