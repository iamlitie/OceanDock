import { connect } from 'react-redux'

import { getLikeShops } from '../actionCreator'

let mapStateToProps = state => {
    return {
        // limit: state.home.limit,
        limit: state.getIn(['home' , 'limit'])
    }
}

let mapDispatchToProps = dispatch => {
    return {
        getLikeShops(limit) {
            // getLikeShops由actionCreator里的函数提供 结果是返回一个扁平的对象
            // 派发到根的saga里
            dispatch(getLikeShops(limit))
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)