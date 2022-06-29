import React, { Component } from 'react'

import {
    Route,
    Switch,
} from 'react-router-dom'

import Done from '@/done/Done'
import Home from './pages/home/container/Index'
import ShopCar from './pages/shopcar/container/ShopCar'
import Mine from './pages/mine'
import Community from './pages/community/container/Community'
import CommonityHot from './pages/community/ui/Hot'
import Login from '@/login/Login'
import Register from '@/register/Register'
import ShopItem from './pages/shopitem/container/ShopItem'

export default class app extends Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/home" component={Home}></Route> 
                    <Route exact path='/communityhot' component={CommonityHot}></Route>
                    <Route path="/community" component={Community}></Route> 
                    <Route path="/done" component={Done}></Route>
                    <Route path='/shopcar' component={ShopCar}></Route>
                    <Route path='/mine' component={Mine}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/shopitem' component={ShopItem}></Route>

                    <Route exact path="/" component={Home}></Route> 
                </Switch>
            </>
        )
    }
}
