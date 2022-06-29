import React, { Component , createRef } from 'react'

import { withRouter , NavLink } from 'react-router-dom'

import { loadState , saveState } from 'utils/state'

import {
    Body,
    Register,
} from './styled'

import { HeaderTitle as Header , Input , Btn } from '../loginTitle/index'

@withRouter
export default class Login extends Component {
    state = {
        user: createRef(),
        password: createRef()
    }

    cancel = () => {
        this.props.history.go(-1)
    }

    login = () => {
        if (this.user.value && this.password.value) {
            const users = loadState('OceanUser')
            users.map(item => {
                if (this.user.value === item.user && this.password.value === item.password) {
                    item.pass = true
                    saveState('OceanUser' , users)
                    this.props.history.push('/mine')
                }
            })

        } else {
            alert('用户名或密码错误')
        }
        
    }

    render() {
        return (
            <Body>
                <Header title="登录" cancel={this.cancel}></Header>
                <Input>
                    <input ref={el => this.user = el} type="text" placeholder="输入用户名/邮箱/手机号码" />
                </Input>
                <Input>
                    <input ref={el => this.password = el} type="text" placeholder="输入登录密码" />
                </Input>
                <Btn onClick={this.login}>登录</Btn>
                <Register>
                    <NavLink to='/register'><span>快速注册</span></NavLink>
                    <NavLink to='/done'><span>下载app找回密码</span></NavLink>
                </Register>
            </Body>
        )
    }
}
