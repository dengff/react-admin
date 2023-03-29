import styled from 'styled-components';
import {Avatar, Button, Input, message, Space, Tag, Upload} from 'antd';

import {ProDescriptions} from '@ant-design/pro-components';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {CameraIcon} from '@/components/Icon';
import React from 'react';

const Warp = styled.div`
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  position: relative;
  background: #fff;
  gap: 10px;

  .user-mes {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 14px !important;
  }

  .ant-upload {
    position: relative;
    cursor: pointer;

    .camera {
      position: absolute;
      bottom: -55px;
      right: 4px;
    }
  }
`;

const Header = (props) => {
  const {userInfo} = useSelector((state:any) => state.global);
  const [editePh, setEditePh] = useState(false);
  const [editeEai, setEditeEai] = useState(false);
  const [dataSource, setDataSource] = useState({
    userName: userInfo?.name,
    realName: 'N',
    accountId: '7802_sehjlkf_01gk',
    phoneNumber: '15977692030',
    registrationTime: '2021-02-10',
    mailbox: '2539872356@qq.com',
  });

  function changeUserInfo(key, value) {
    const _dataSource = this.dataSource;
    _dataSource[key] = value;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this?.setDataSource(_dataSource);
        message.success('success');
        resolve(_dataSource);
      }, 600);
    });
  }

  return (
    <Warp>
      <Space direction={'horizontal'} className="user-mes">

        <Upload
          name="avatar"
          className="avatar-uploader"
          showUploadList={false}
          action="uploadUrl"
        >
          <Avatar size={120} src={userInfo?.avatar}></Avatar>
          <Button
            shape={'circle'}
            className="camera"
            icon={<CameraIcon/>}
          />

        </Upload>
        <span style={{
          fontSize: '12px',
          color: '#909399',
        }}>{'生活其实很简单，过了今日就是明天。'}</span>
      </Space>

      <div style={{display: 'grid', margin: '0 10px'}}>
        <ProDescriptions
          column={2}
          request={() => {
            return Promise.resolve({
              data: dataSource,
              success: true,
            });
          }}
          columns={[
            {
              title: '用户名',
              key: 'text',
              dataIndex: 'userName',
            },
            {
              title: '实名认证',
              key: 'realName',
              dataIndex: 'realName',
              valueType: 'select',
              valueEnum: {
                Y: {text: '已认证', status: 'Success'},
                N: {
                  text: '未认证',
                  status: 'Error',
                },
              },
              render: (dom, entity, index, action, schema) => {
                const text = schema.valueEnum[dom as string].text;
                if (dom === 'Y') {
                  return <Space>
                    <Tag color={'rgba(207,250,207,0.95)'}><span
                      style={{color: '#26b42a'}}>{text}</span></Tag>
                    <a>详情</a>
                  </Space>;
                }
                return <Space>
                  <Tag color={'warning'}><span
                    style={{color: '#b49826'}}>{text}</span></Tag>
                  <a onClick={() => props?.changeActiveKey(
                    'security')}>前往认证</a>
                </Space>;

              },
            },
            {
              title: '账号 ID',
              dataIndex: 'accountId',
            },
            {
              title: '绑定手机号',
              dataIndex: 'phoneNumber',
              valueType: 'text',
              render: (dom, entity, index, action, schema) => {
                if (editePh) return <Input
                  size={'small'}
                  defaultValue={dom as string}
                  placeholder="请输入手机号"
                  onBlur={(e) => {
                    changeUserInfo.call(action, 'phoneNumber', e.target?.value).
                      then(res => setEditePh(false));
                  }}

                />;
                if (!dom) return (
                  <Space>
                    <Tag color={'error'}><span
                      style={{color: '#f56c6c'}}>未绑定</span></Tag>
                    <a onClick={() => setEditePh(true)}>前去绑定</a>
                  </Space>
                );
                return <Space>
                  {(dom as string).replace(/^(\d{3})\d+(\d{4})$/, '$1****$2')}
                  <a onClick={() => setEditePh(true)}>修改</a>
                </Space>;
              },
            },

            {
              title: '注册时间',
              key: 'date',
              dataIndex: 'registrationTime',
              valueType: 'dateTime',
            },
            {
              title: '邮箱',
              key: 'mailbox',
              dataIndex: 'mailbox',
              valueType: 'text',
              render: (dom, entity, index, action, schema) => {
                if (editeEai) return <Input
                  defaultValue={dom as string}
                  size={'small'}
                  placeholder="请输入邮箱"
                  onBlur={e => {
                    changeUserInfo.call(action, 'mailbox', e.target?.value).
                      then(res => setEditeEai(false));
                  }}
                />;
                return <Space>
                  {dom}
                  <a onClick={_ => setEditeEai(true)}>修改</a>
                </Space>;
              },
            },
          ]}
        >
        </ProDescriptions>

      </div>
    </Warp>

  );
};

export default Header;