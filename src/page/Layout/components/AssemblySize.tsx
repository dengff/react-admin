import {Dropdown, Tooltip} from 'antd';
import React, {memo} from 'react';
import {changeComponentSize} from '@/store/theme/actions';
import {connect} from 'react-redux';
import {SizeIcon} from '@/components/Icon';

interface IProps {
  componentSize?: string,
  changeComponentSize?: (key: string) => void
}

const items = [
  {
    label: '默认',
    key: 'middle',
    disabled: false,
  },
  {
    label: '小型',
    key: 'small',
    disabled: false,
  },
  {
    label: '大型',
    key: 'large',
    disabled: false,
  },
];


export const AssemblySize = memo((props: IProps) => {
  const {componentSize, changeComponentSize} = props;
  const selectList = items.map(item => {
    item.disabled = item.key === componentSize;
    return item;
  });
  return (<Dropdown
    trigger={['click']}
    menu={{
      items: selectList,
      onClick: ({key}) => {
        changeComponentSize(key);
      },
    }}>
    <Tooltip placement={'left'} title={'组件尺寸'}>
      <span
        className="anticon"
      >
        <SizeIcon/>
      </span>
    </Tooltip>
  </Dropdown>);
});

export default connect((state: any) => state.theme, {changeComponentSize})(
  AssemblySize);