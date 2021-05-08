import React, { useState, useEffect, Image } from "react";
import './TestLayout.scss'
import { Carousel, } from '@huohua/peppa-mobile-ui';

const TestLayout = () => {
    const items = [1, 2, 3, 4, 5, 6]

    const renderImg = () => {
        return <Image
            src={"https://asset.txqn.huohua.cn/image/9783ede3-22cc-426b-b8d0-7a423906bb25.png"}
            ratio={400 / 690}
            className={'banner-info'}
        // style={bannerInfoStyle}
        />
    }  

    const handleBeforeChange = (value) => {

    }
    return <div className={"testLayout1"}> 
        <div className="body">
        <Carousel
          // infinite
          cellSpacing={1}
          autoplay={false}
          dots={false}
          slideWidth={0.5}
          selectedIndex={1}
          beforeChange={(from, to) => handleBeforeChange(to)}
        >
          {
            items.map((item, index) => {
              return (
                <div key={index} className="lesson-aid-main-img">
                  <p>{index}</p>
                  {/* <img src={makeQiniuImageUrl({ url: item.imageUrl, width: 640 }) || ''} alt="" /> */}
                </div>
              );
            })
          }
        </Carousel>
        </div>
     </div>
}
export default TestLayout