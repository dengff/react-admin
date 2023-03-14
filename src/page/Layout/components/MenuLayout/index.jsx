import {Menu} from 'antd';
import React, {PureComponent} from 'react';
import {MenuHoc} from './Hoc/Menu';

class MenuLayout extends PureComponent {
  render() {
    return <Menu {...this.props}/>;
  }
}

export default MenuHoc(MenuLayout);