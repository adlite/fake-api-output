// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Layout from '../../components/Layout';
import Fetcher from '../../components/Fetcher';
import UserOutput from '../../components/UserOutput';
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
    this.props.dispatch(actions.userFetchIfNeeded(id));
  }

  reloadUser = () => {
    const { id } = this.props.match.params;
    this.props.dispatch(actions.userFetch(id));
  };

  render() {
    const { user } = this.props;

    return (
      <Layout title={user.data.name || user.error} onReloadClick={this.reloadUser} gutterBottom>
        <Fetcher isLoading={user.isFetching} error={user.error}>
          <UserOutput data={user.data} />
        </Fetcher>
      </Layout>
    );
  }
}

export default User;
