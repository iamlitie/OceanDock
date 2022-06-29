import { connect } from 'react-redux'
import { getProduct , getShopsNote , addCart } from '../actionCreator'

const mapStateToProps = state => {
    let index = state.getIn(['home' , 'sellerInfo'])
    return {
        product: state.getIn(['shopitem' , 'product' , 'moduleList']),
        note: state.getIn(['shopitem' , 'note']),
        // sellerInfo: state.getIn(['home' , 'likeShops' , index]),
        shopId: state.getIn(['home' , 'shopId']),
        sellerIndex: state.getIn(['shopitem' , 'sellerIndex'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProduct (id) {
            dispatch(getProduct(id))
        },
        getShopsNote (id) {
            dispatch(getShopsNote(id))
        },
        addCart (shops) {
            dispatch(addCart(shops))
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)