import {FullscreenExitOutlined, FullscreenOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';
import React, {useEffect, useState} from 'react';
import screenfull from 'screenfull';
import Auth from '@/components/Auth';

const FullScreenIcon = () => {
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    screenfull.on('change', () => {
      setFullscreen(screenfull.isFullscreen);
    });
  }, []);
  return (
    <Auth
      auth={screenfull.isEnabled}
      render={_ => <Tooltip
        onClick={e=>screenfull.toggle()}
        title={fullscreen ? '取消全屏' : '全屏'}
      >
        {fullscreen ? <FullscreenExitOutlined/>
          : <FullscreenOutlined/>
        }
      </Tooltip>}
    />
  );
};

export default React.memo(FullScreenIcon);
