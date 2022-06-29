import React from 'react'
import Headered from '@/top-ad/HeaderAd'
import { Carousel, WingBlank } from 'antd-mobile'
import {
    ProductInfo,
} from './styled'

import TemporaryDrawer from './Slider'

const Index = (props) => {
    return (
        <>
            <Headered></Headered>
            {/* 轮播 */}
            <div className="swiper">
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        // autoplayInterval={2000}
                    >
                    {props.pic && props.pic.map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%'}}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank> 
            </div>
            <ProductInfo>
                <div>
                    <p>
                        <span>包邮包税</span>
                        <span>【10片/盒】泰国ATNNK 童颜蚕丝面膜Fibroin金银面膜</span>
                    </p>
                    <p>¥<span>59.9</span></p>
                </div>
                <TemporaryDrawer addCart={props.addCart}></TemporaryDrawer>
            </ProductInfo>
        </>
    )
}

export default Index