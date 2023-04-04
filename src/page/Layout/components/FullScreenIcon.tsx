import {FullscreenExitOutlined, FullscreenOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";
import React, {useEffect, useState} from "react";
import screenfull from "screenfull";
import {AuthControl} from "@/components/Auth";

const FullScreenIcon = () => {
  const [fullscreen, setFullscreen] = useState(false);
  useEffect(() => {
    screenfull.on("change", () => {
      setFullscreen(screenfull.isFullscreen);
    });
  }, []);
  return (
    <AuthControl
      permissionControl={() => screenfull.isEnabled}
    >
      <Tooltip
        title={fullscreen ? "取消全屏" : "全屏"}
      >
        <span style={{cursor: "pointer"}} onClick={e => screenfull.toggle()}>
          {fullscreen ? <FullscreenExitOutlined/>
            : <FullscreenOutlined/>
          }
        </span>

      </Tooltip>
    </AuthControl>
  );
};

export default React.memo(FullScreenIcon);
