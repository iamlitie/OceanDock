import React, { Component } from 'react'

import Index from '../ui/index'

import { withRouter } from 'react-router-dom'

import { get } from 'utils/http'

import BScroll from 'better-scroll'

import Masonry from 'masonry-layout'

@withRouter
class Community extends Component {
    state = {
        shops: [],
        page: 0
    }

    loaddata = async () => {
        const res = await get({
            url: '/api/note/api/GetSocialDiscoverList',
            params: {
                Page: this.state.page,
                pageSize: 10,
                AccessToken: '',
                UserID: '',
                Cookieid: '', 
                yid: '',
            }
        })
        return res
    }

    async componentDidMount () {
        const shops = await this.loaddata()
        this.setState({
            shops: [
                ...this.state.shops,
                ...shops.Result
            ],
            page: this.state.page + 1
        })

        const root = document.querySelector('#root')
        this.rootScroll = new BScroll(root, {
            tap: true,
            pullUpLoad: {
              threshold: -50 // 当上拉距离超过50px时触发 pullingUp 事件
            },
            click: true,
        })
        this.rootScroll.on('pullingUp' , async () => {
            const shops = await this.loaddata()
            this.setState({
                shops: [
                    ...this.state.shops,
                    ...shops.Result
                ],
                page: this.state.page + 1
            })
            this.rootScroll.finishPullUp()
            this.rootScroll.refresh()
        })

        const demo = document.querySelector('.item').parentElement
        console.log(demo)
        new Masonry(demo , {
            itemSelector: '.item',
            columnWidth: '.item'
        })
    }

    render() {
        return (
            <>
                <Index {...this.props} shops={this.state.shops}></Index>   
            </>
        )
    }
}

export default Community
