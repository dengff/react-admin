import {DownOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Dropdown, message, Space, Tooltip} from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import {
  deleteCurrentTab,
  deleteAllTab,
  deleteOtherTab,
} from '@/store/topHeader/actions.js';
import {connect} from 'react-redux';

const items = [
  {
    label: '关闭当前',
    key: 'current',
  },
  {
    label: '关闭其他',
    key: 'other',
  },
  {
    label: '关闭所有',
    key: 'all',
  },
];
const TabBarExtraRight = (props) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {deleteCurrentTab, deleteAllTab, deleteOtherTab} = props;
  const onClick = ({key}) => {
    if (key === 'current') {
      return deleteCurrentTab(pathname).then(({key}) => navigate(key));
    }
    if (key === 'other') return deleteOtherTab(pathname);
    if (key === 'all') return deleteAllTab(pathname).finally(navigate('/home'));
  };
  return (<Space align={"center"}>
    <Dropdown menu={{items, onClick}}>
      <Button>
        <Space>
          更多
          <DownOutlined/>
        </Space>
      </Button>
    </Dropdown>
  </Space>);
};

export default connect(null, {deleteCurrentTab, deleteAllTab, deleteOtherTab})(
  TabBarExtraRight);