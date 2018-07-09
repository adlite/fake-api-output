// Vendor
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
// Components
// import Component from '../Component';
// Styles
import style from './style.styl';

export default class ${TM:COMPONENT_NAME} extends PureComponent {
  static defaultProps = {
    className: '',
  };

  static propTypes = {
    className: PropTypes.string,
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
