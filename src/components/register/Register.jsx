import React, { Component , createRef} from 'react'

import { withRouter , NavLink, Redirect } from 'react-router-dom'

import { HeaderTitle as Header , Input , Btn } from '../loginTitle/index'

import { loadState , saveState } from 'utils/state'

import {
    Body,
    Deal,
} from './styled'

@withRouter
class Register extends Component {
    state = {
        user: createRef(),
        password: createRef()
    }

    cancel = () => {
        this.props.history.go(-1)
    }

    register = () => {
        if(!(/^1[3456789]\d{9}$/.test(this.user.value))){ 
            alert("手机号码有误，请重填");  
            return false; 
        } 
        if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(this.password.value))){ 
            alert("密码有误，请重填");  
            return false; 
        } 
        const users = loadState('OceanUser') || []
        const user = {
            user: this.user.value,
            password: this.password.value,
            pass: false
        }
        users.push(user)
        saveState('OceanUser' , users)
        this.props.history.push('/login')
    }

    render() {
        return (
            <Body>
                <Header title="注册" cancel={this.cancel}></Header>   
                <Input>
                    <input ref={el => this.user=el} type="text" placeholder="输入手机号" />
                </Input>
                <Input>
                    <input type="text" placeholder="输入图形验证码" />
                </Input>
                <Input>
                    <input type="text" placeholder="输入短信验证码" />
                </Input>
                <Input>
                    <input ref={el => this.password=el} type="text" placeholder="请设置6-16位登录密码(包含数字和字母)" />
                </Input>
                <Deal>
                    注册即视为同意
                    <span>《洋码头用户协议》</span>
                </Deal>
                <Btn onClick={this.register}>注册</Btn>
            </Body>
        )
    }
}

export default Register