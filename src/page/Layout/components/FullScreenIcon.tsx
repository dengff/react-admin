import {FullscreenExitOutlined, FullscreenOutlined} from '@ant-design/icons';
import {Tooltip} from 'antd';
import React, {useEffect, useState} from 'react';
import screenfull from 'screenfull';
import Auth from '@/components/Auth';
// import type {} from "@ant-design/pro-components"
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
      render={() => <Tooltip
        title={fullscreen ? '取消全屏' : '全屏'}
      >
        <span style={{cursor: "pointer"}} onClick={e => screenfull.toggle()}>
          {fullscreen ? <FullscreenExitOutlined/>
            : <FullscreenOutlined/>
          }
        </span>

      </Tooltip>}
    />
  );
};

export default React.memo(FullScreenIcon);
