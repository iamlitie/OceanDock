import React, { Component , createRef } from 'react'

import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import { changeTopVal } from '../../pages/home/actionCreator'

import {
    HeaderAd
} from '../../pages/home/ui/styled'

@connect(null, dispatch => {
    return {
        changeTopVal (val) {
            dispatch(changeTopVal(val))
        }
    }
})
class Headered extends Component {
    state = {
        span : createRef(),
        div : createRef()
    }

    deleteAd = () => {
        this.props.changeTopVal(0)
        // 直接remove有问题
        this.state.span.parentNode.setAttribute('style', 'display:none')
    }

    componentWillUnmount () {
        this.setState = () => false
    }
    render() {
        return (
            <>
                <HeaderAd>
                    <span ref={el => this.state.span = el} onClick={this.deleteAd}></span>    
                    <NavLink to='/done'>
                        <div ref={el => this.state.div = el}></div>
                    </NavLink>
                </HeaderAd>   
            </>
        )
    }
}

export default Headered