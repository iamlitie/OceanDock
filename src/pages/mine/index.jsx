import React, { Component } from 'react'

import {
    Wrap,
    Header,
    Banner,
    List,
    ListItem,
} from './styled'

import { NavLink } from 'react-router-dom'

import { loadState , saveState } from 'utils/state'

export default class index extends Component {
    componentWillMount () {
        this.users = loadState('OceanUser') || []
        // this.user = this.users.map(item => {
        //     if (item.pass === true) {
        //         console.log(item)
        //         return item
        //     }
        // })
        for (var i = 0 ; i < this.users.length ; i ++) {
            console.log(this.users[i])
            if (this.users[i].pass) {
                this.user = this.users[i]
                return false
            }
        }
    }

    out = () => {
        this.users.map(item => {
            if (item.pass) {
                item.pass = false
            }
        })
        saveState('OceanUser' , this.users)
        // console.log(this.props)
        this.props.history.replace('/mine')
    }

    render() {
        return (
            <Wrap>
                <Header>
                    个人中心
                    <div>
                        <span>
                            <NavLink to='/shopcar'>
                            <img src="https://s1.ymatou.com/myorderm/images/shopcarticon-0876af36d4.png" alt=""/>
                            </NavLink>
                        </span>
                        <span>
                            <NavLink to='/home'>
                            <img src="https://s1.ymatou.com/myorderm/images/gohome-9efcb7cb30.png" alt=""/>
                            </NavLink>
                        </span>
                    </div>
                </Header>
                <Banner>
                    <div>
                        <img src="http://s1.ymatou.com/homem/images/share_personal-9287711f0c.png" alt=""/>
                    </div>
                    {
                        this.user && this.user.pass ? (<span>{this.user.user}</span>) : (<NavLink to='/login'><span>请登录</span></NavLink>)
                    }
                </Banner>
                <List>
                    <ListItem width='0 0 1px 0'>我的订单</ListItem>
                    <ListItem width='0 0 1px 0'>我的优惠劵</ListItem>
                    {
                        this.user && this.user.pass ? (<ListItem width='0 0 1px 0' onClick={this.out}>退出</ListItem>) : null
                    }
                    
                </List>
            </Wrap>
        )
    }
}
