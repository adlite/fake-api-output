// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Components
import Layout from '../../components/Layout';
import Fetcher from '../../components/Fetcher';
// Actions
import * as actions from '../../store/modules/${TM:DUCK_NAME}';

@connect(({ ${TM:DUCK_NAME} }) => ({ ${TM:DUCK_NAME} }))
class ${TM:COMPONENT_NAME} extends PureComponent {
  static propTypes = {
    ${TM:DUCK_NAME}: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.dispatch(actions.${TM:DUCK_NAME}Fetch());
  }

  render() {
    const { ${TM:DUCK_NAME} } = this.props;

    return (
      <Layout title="${TM:COMPONENT_NAME}">
        <Fetcher isLoading={${TM:DUCK_NAME}.isFetching}>
          {${TM:DUCK_NAME}.data.map(post => <p key={post.id}>{post.body}</p>)}
        </Fetcher>
      </Layout>
    );
  }
}

export default ${TM:COMPONENT_NAME};
