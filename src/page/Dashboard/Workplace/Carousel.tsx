import {ProCard} from "@ant-design/pro-components";
import React from "react";
import {Carousel} from "antd";

const picStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
export const CarouselComp = () => {
  return (
    <ProCard ghost>
      <Carousel effect="fade" autoplay>
        <div>
          <h3 style={{
            ...picStyle,
            background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
          }}>Pic 1</h3>
        </div>
        <div>
          <h3 style={{
            ...picStyle,
            background: "linear-gradient(0deg, rgba(34,76,195,1) 0%, rgba(45,253,81,1) 100%)",
          }}>Pic 2</h3>
        </div>
        <div>
          <h3 style={{
            ...picStyle,
            background: "linear-gradient(0deg, rgba(13,120,244,1) 0%, rgba(251,65,186,0.6993391106442577) 100%)",
          }}>Pic 3</h3>
        </div>
        <div>
          <h3 style={{
            ...picStyle,
            background: "linear-gradient(0deg, rgba(34,120,195,1) 0%, rgba(65,251,125,0.8197872899159664) 100%)",
          }}>
            Pic 4</h3>
        </div>
      </Carousel>


    </ProCard>

  );
};
export default CarouselComp;