import React, { Component , createRef } from 'react'
import Bscroll from 'better-scroll'
import { get } from 'utils/http'
import { Scroll } from './styled'
import YanghuoScroll from './YanghuoScroll'

export default class Yanghuo extends Component {
    yanghuo = []
    async componentDidMount () {
        let res = await get({
            url: '/api/home/api/getYHList',
            params: {
                pageId: 2027,
                pageIndex: 0,
                pageSize: 5,
                cookieId: '',
                yid: '',
                timeNow: 202008032908,
            }
        })
        this.yanghuo = res.getYHTProduct.hits
    }

    render() {
        return (
            <Scroll>
                {
                    this.yanghuo && this.yanghuo.map(item => {
                        return(
                            <div key={item.Id}>
                                <img src={item.PicUrl} alt=""/>
                                <YanghuoScroll item={item.Items}></YanghuoScroll>
                            </div>
                        )
                    })
                }
            </Scroll>
        )
    }
}
