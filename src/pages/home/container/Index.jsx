import React, { Component } from 'react'

import Wrap from '../ui/index'

import connect from './connect'

@connect
class Index extends Component {
    render() {
        return (
            <>
                <Wrap></Wrap>   
            </>
        )
    }
    componentDidMount () {
        this.props.getLikeShops(this.props.limit)
    }
}

export default Index