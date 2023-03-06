import {FullscreenExitOutlined, FullscreenOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';
import React, {useEffect, useState} from 'react';


const FullScreenIcon = () => {
  const [fullscreen, setFullscreen] = useState(false);
  return fullscreen ? (
    <Tooltip title={'取消全屏'}>
      <FullscreenExitOutlined/>
    </Tooltip>
  ) : (
    <Tooltip title={'全屏'}>
      <FullscreenOutlined/>
    </Tooltip>
  );
};

export default React.memo(FullScreenIcon);
