import React, { Component , createRef } from 'react'

import { TitleContainer } from '@/let-title/CompTitle'

import {Main} from './styled'

import Bscroll from 'better-scroll'

import { getLikeShops , returnId } from '../actionCreator'
import {returnSeller} from '../../shopitem/actionCreator'
import Yanghuo from './Yanghuo'

import {connect} from 'react-redux'

import { NavLink } from 'react-router-dom'
// 1px边框的点击加载更多按钮
import Btn from './Btn'

@connect(
    state => {
        return {
            likeShops: state.getIn(['home' , 'likeShops']),
            topVal: state.getIn(['home' , 'topVal']),
            limit: state.getIn(['home' , 'limit']),
            // likeShops: state.home.likeShops,
            // topVal: state.home.topVal
        }
    },
    dispatch => {
        return {
            getLikeShops(limit) {
                // getLikeShops由actionCreator里的函数提供 结果是返回一个扁平的对象
                // 派发到根的saga里
                dispatch(getLikeShops(limit))
            },
            returnSeller (index) {
                dispatch(returnSeller(index))
            },
            returnId(id) {
                dispatch(returnId(id))
            }
        }
    }
)
class Title extends Component {
    state = {
        limitTiming : [
            {
                id: '001',
                url: 'http://pic1.ymatou.com/G03/M05/D7/64/CgzUIF8f5QuAJ61tAAFeh8d3SH477_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG03%2fM05%2fD8%2f0A%2fCgzUIV8f5QuAOgq8AAFoX-HPbUs33_259_120_o.jpeg'
            },
            {
                id: '002',
                url: 'http://pic1.ymatou.com/G03/M02/E3/6A/CgzUH18g4FOAV_YpAAFKQ2G_q_c85_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG03%2fM02%2fE3%2f6A%2fCgzUH18g4FOAfx6EAAFMhgX63dg02_259_120_o.jpeg'
            },
            {
                id: '003',
                url: 'http://pic1.ymatou.com/G03/M05/3B/16/CgzUH18P_KeAPkwkAAG7NQjr1dg19_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG03%2fM06%2f3B%2f11%2fCgzUIV8P_KeAVpV-AAG9bPLIrXo89_259_120_o.jpeg'
            },
            {
                id: '004',
                url: 'http://pic1.ymatou.com/G03/M02/E3/6C/CgzUH18g4GSAM8eSAADeSs-vhMI16_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG03%2fM02%2fE3%2f6C%2fCgzUH18g4GWALoD6AADkWVANjxU71_259_120_o.jpeg'
            },
            {
                id: '005',
                url: 'http://pic1.ymatou.com/G03/M03/F1/61/CgzUIF8iQMGAP1GUAAEikD66vmw41_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG03%2fM03%2fF2%2f2A%2fCgzUIV8iQMGACyTQAAEuEWgJ5j086_259_120_o.jpeg'
            },
            {
                id: '006',
                url: 'http://pic1.ymatou.com/G03/M02/E3/A2/CgzUIV8g4HSAR6JPAAE_fjWHw7M74_49_24_o.jpeg?OldUrl=http%3a%2f%2fpic1.ymatou.com%2fG03%2fM09%2fE3%2fA2%2fCgzUIV8g4HWALWYVAAFHMQ4Rgao42_259_120_o.jpeg'
            }
        ],
        btn: createRef(),
        isShowBtn:''
    }

    root =  document.getElementById('root')

    loadMore = () => {
        // 等待加载数据
        this.props.getLikeShops(this.props.limit)
    }
    // 判断返回顶部按钮的显示
    showBtn = () => {
        if (this.root.scrollTop >= 1000 && !this.state.isShowBtn || this.root.scrollTop < 1000 && this.state.isShowBtn) {
            this.setState({
                isShowBtn: !this.state.isShowBtn
            })
        }
    }
    // 返回顶部
    toTop = () => {
        this.root.scrollTo(0,0)
    }

    // 将店铺信息放到cookie
    setCookie = (index) => {
        const value = this.props.likeShops[index].sellerInfo
        document.cookie = 'oceanDockShopItem=' + JSON.stringify(value)
    }

    returnId = (id) => {
        this.props.returnId(id)
    }

    componentDidMount () {
        // 横向滚动
        const main = document.querySelector('.main')

        new Bscroll(main , {
            scrollX: true,
            click: false,
            scrollY: false,
        })
        // 监听回到顶部按钮的显示
        this.root.addEventListener('scroll' , this.showBtn)
    }
    // 取消setState的使用 不然警告
    componentWillUnmount() {
        this.setState = ()=>false;
    }

    render() {
        return (
            <>
                <Main>
                    <TitleContainer url='https://s1.ymatou.com/homem/images/tag_xsq-d72323a492.png' padding='0.2rem'>
                        <i></i>
                        <span>限时抢</span>
                    </TitleContainer>
                    <div className="main">
                        <div className="main-loop">
                            {
                                this.state.limitTiming.map(item => {
                                    return(
                                        <div key={item.id}>
                                            <img src={item.url} alt=""/>
                                            <span>
                                                <i>仅剩</i>
                                                {this.state.a}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <TitleContainer url='https://s1.ymatou.com/homem/images/tag_select-cb4a47d788.png'>
                        <i></i>
                        <span>小编精选</span>
                    </TitleContainer>
                    <div className="chanel">
                        <div>
                            <h2>CHANEL</h2>
                            <i>查看更多</i>
                        </div>
                    </div>

                    <TitleContainer url='https://s1.ymatou.com/homem/images/tag_yhj-2f872d77cd.png' padding='0.2rem'>
                        <i></i>
                        <span>集洋货</span>
                    </TitleContainer>
                    <Yanghuo></Yanghuo>

                    <TitleContainer url='https://s1.ymatou.com/homem/images/tag_heart-dc2c84d296.png'>
                        <i></i>
                        <span>猜你喜欢</span>
                    </TitleContainer>
                    <div className="like">
                        {
                            this.props.likeShops.map((item , index) => {
                                return(
                                    <NavLink to={'/shopitem?'+item.id}  key={item.id} onClick={()=>this.returnId(item.id)}>
                                        <div className="item" onClick={() => this.setCookie(index)}>
                                            <img src={item.pic} alt=""/>
                                            <div className='item-msg'>
                                                <h3>{item.name}</h3>
                                                <i><span>包邮包税</span></i>
                                                <div>
                                                    <span>
                                                        ¥{parseInt(item.price).toFixed(2)}
                                                    </span>
                                                    <span>
                                                        <div>
                                                            <img src={item.sellerInfo.countryIconUrl} alt=""/>
                                                        </div>
                                                        {item.sellerInfo.countryName}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                        {/* 加载更多按钮 */}
                        <div className='button' onClick={this.loadMore} ref={el => this.state.btn = el}>
                            <Btn width='1px'>加载更多</Btn>
                        </div>
                    </div>
                    {/* 返回顶部按钮 */}
                    <div className={this.state.isShowBtn ? 'to-top' : ''} onClick={this.toTop}></div>
                    {/* 底部 */}
                    <footer>
                        <p>
                            <span>客户端</span>|
                            <span>关于洋码头</span>|
                            <span>媒体报道</span>
                        </p>
                        <p>上海洋码头网络技术有限公司 版权所有</p>
                    </footer>
                </Main>
            </>
        )
    }
}

export default Title