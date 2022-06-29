import React from 'react'
import { ShopMsg as Msg } from './styled'

const ShopMsg = (props) => {
    return (
        <Msg>
            <div className="title">详情</div>
            <div className="title-m">图文详情</div>
            {
                props.product && props.product.map(item => {
                    return(
                        <div key={item.title}>
                            <div className="msg-top">{item.title}</div>
                            {item.text && <div className="msg-m">{item.text}</div>}
                            {
                                item.picList && item.picList.map(item => {
                                    return(
                                        <div key={item}>
                                            <img src={item} alt="" width="100%" />
                                        </div>
                                    )
                                })
                            }
                            {
                                item.propertyList && item.propertyList.map(item => {
                                    return(
                                        <div className="property-list" key={item.key}>
                                            <span className="key">{item.key}</span>
                                            <span className="value">{item.value}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </Msg>   
    )
}

export default ShopMsg