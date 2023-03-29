import { useEffect, useRef } from "react";
import * as echarts from 'echarts';
import type {EChartsCoreOption} from "echarts";

export const useEcharts = (options:EChartsCoreOption, data?:any) => {
  const _chart = useRef<any>();
  const echartsRef = useRef(null);
  const echartsResize = () => {
    echartsRef && _chart?.current?.resize();
  };

  useEffect(() => {
    if (data?.length !== 0) {
      _chart?.current?.setOption(options);
    }
  }, [data]);

  useEffect(() => {
    if (echartsRef?.current) {
      _chart.current = echarts.init(echartsRef.current);
    }
    _chart?.current?.setOption(options);
    window.addEventListener("resize", echartsResize, false);
    return () => {
      window.removeEventListener("resize", echartsResize);
      _chart?.current?.dispose();
    };
  }, []);

  return [echartsRef];
};
