// Vendor
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Components
// import Component from '../Component';
// Actions
import * as ${TM:DUCK_NAME}Actions from '../../ducks/${TM:DUCK_NAME}';
// Styles
import style from './style.styl';

@connect(({ ${TM:DUCK_NAME} }) => {
  return {
    data: ${TM:DUCK_NAME}.data,
  };
})
export default class ${TM:COMPONENT_NAME} extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
    dispatch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { className } = this.props;

    return (
      <div className={cn(style.${TM:COMPONENT_NAME}, className)}>
        ${TM:COMPONENT_NAME}
      </div>
    );
  }
}
