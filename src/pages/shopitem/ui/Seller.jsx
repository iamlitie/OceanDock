import React from 'react'
import { SellerWrap } from './styled'

const Seller = (props) => {
    return (
        <SellerWrap>
            <div className="title">
                <div className="wrap">
                    <img src={props.seller.avatarUrl} alt=""/>
                    <div className="title-top">
                        <p>{props.seller.name}</p>
                        <div>
                            <span>{props.seller.sellerLevel}</span>
                            <span>{props.seller.sellerDSR.DSRPoint.point}</span>
                            <img src={props.seller.countryIconUrl} alt=""/>
                            <span>{props.seller.countryName}</span>
                        </div>
                    </div>
                </div>
                <div className="guanzhu">+未关注</div>
            </div>
            <ul className="main">
                <li>
                    <span>最近销量</span>
                    <span>1232</span>
                </li>
                <li>
                    <span>粉丝</span>
                    <span>1234</span>
                </li>
                <li>
                    <span>综合评分</span>
                    <span>4.8</span>
                </li>
                <li>
                    <span>买家评价<i>4.8</i></span>
                    <span>物流服务<i>4.6</i></span>
                    <span>客户服务<i>4.7</i></span>
                </li>
            </ul>
            <div className="button">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAABGdBTUEAALGPC/xhBQAAAzpJREFUSA3lVk1oE1EQfvM2SVvdiFV69WSTauIP2INFhPqDBxXxoiBqKVKtivYHLFo8VD0o4k9SWsV6Equg9eBFClJtBcHfQhFaQ1OFemgPGqq4m7bJZnect2U3MSSUtuvJd9h582beN+/NfG8SYBkj3uYvN3QMMYbliKwwwzTnKQBLIMIncEGz9/RwrwUA1gRvrylWEokvFGyZteaEBAZJN5eChfWREYHnskBVLXnKDAbsrVf27IaaoQnLNh+JXRVFynjsESLuSaF+ljBqBI55Q2FUx2PfKI0lHFw75IZIz3yCZO9RQqWrKMIQrScYl1d46wZ+cOGkjk1Ui2AUv9+pYALX2zgSoTp2m3zAyeNijWPXPgkZnhEK4+yyKR38AOPXTTjEk9gV8IDS6t+PhvGYWPVZro8GSX/GEHcuKCZA95KG6C4LQwn7+qmWGziHKs4MPCoMxKarAICW04IkpSxzPwC/KXQ0WLVg6XqhGEWsW8jMkwndibFYYs8VgwICW2eSRoBKTHLnA59uL/OJ/Oezm0+gfXUgn30SsUDYKH/IEfCdUIwp45yQ2UNp9bUkNX1YHdNGTZpnOYg1dSw2ipo2SPNLWWZTpe51Xkwo1huYDJVV6KC/JupK9Cgfci6FFskYnYrzQMrQa4lA1eYu8QH2iwE0uTm8ZClAjRvbyX6NKrbU9mHQyVzQ4U0VDU1JiTLd0OuIMAeIIylJkjabDz8e8h8xAO+QIUdaIQ4cm+l4W8m+Nw2cnhHZnpLWS0y5QgeQ05aZmWhvwLBWbhy5Z/dSNexfazBsojxvIbcSuk2MkvDKDa4LVh9Uw74qysQxKkVQQBHQID2nu3JD9L7Qp28FViY1rYXAK+nWy5HBd3LqA5BueOsjg8LnPxq/w75OYtkDp6+shEv7qNO8sHDtd0jFPkRFP0jEsOtqOc1XCiyqeSXJbRZGOqC18o9ljoAXHbthrrPbAYnefzXcXM5OrNkBCYzaK4229zkev2mZ++dJ0MSilM1gE4L9n4au95H0jarxdYAY+zONPiuJ8pZAGdeKBQ4hfLDw7IAet+ewltQ6yLyJkmt2d8spW86afvv3EBPUaXrcvOCEhfEHxJdJP9k5i2sAAAAASUVORK5CYII=" alt=""/>    
                进店看看
            </div>
        </SellerWrap>
    )
}

export default Seller