import {ProCard} from "@ant-design/pro-components";
import React from "react";
import Overview from "@/page/Dashboard/Workplace/Overview";
import CarouselComp from "@/page/Dashboard/Workplace/Carousel";
import Shortcuts from "@/page/Dashboard/Workplace/Shortcuts";
import ContentPercentage from "@/page/Dashboard/Workplace/ContentPercentage";
import Announcement from "@/page/Dashboard/Workplace/Announcement";
import styled from "styled-components";

const Warp = styled.div`
  .ant-pro-card-col {
    border: none;
  }
`;
export const Workplace = () => {

    return (
      <Warp>
        <ProCard ghost split={"vertical"} gutter={[20, 0]}>
          <ProCard
            colSpan={"80%"}
            split={"horizontal"}
            ghost
          >
            <Overview/>

            <ContentPercentage/>
          </ProCard>

          <ProCard colSpan={"20%"} split={"horizontal"} ghost gutter={[20, 20]}>
            <Shortcuts/>

            <Announcement/>
            <CarouselComp/>

          </ProCard>

        </ProCard>
      </Warp>
    );
  }
;

export default Workplace;