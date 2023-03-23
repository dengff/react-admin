import {Menu} from 'antd';
import React, {PureComponent} from 'react';
import {withMenuHoc} from './Hoc';

class MenuLayout extends PureComponent {
  render() {
    return <Menu {...this.props}/>;
  }
}

export default withMenuHoc(MenuLayout);