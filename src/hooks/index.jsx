import { useEffect, useRef } from "react";

export const useEcharts = (options, data) => {
  const _chart = useRef();
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
