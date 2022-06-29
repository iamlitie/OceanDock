import { call , put , takeEvery } from 'redux-saga/effects'
import { get , post } from 'utils/http'

function * getProduct (action) {
    
    const product = yield call(get , {
        url: '/api/item/api/getProductDescriptionInfo',
        params: {
            productId: action.id,
            trackid: ''
        }
    })
    yield put({
        type: 'GET_SHOP',
        info: product.result
    })
}

function * getShopsNote (action) {
    let note = yield call(post , {
        url: '/api/item/api/getProductNote',
        data: {
            id: action.id,
            pagesize: 1,
            evaluationid: '',
            isprod: 1,
            userid: ''
        }
    })
    yield put({
        type: 'GET_SHOP_NOTE',
        note: note.data
    })
}


function * returnSeller (action) {
    yield put({
        type: 'SELLER',
        index: action.index
    })
}

function * addCart (action) {
    yield put({
        type: 'ADD_CART',
        addCart: action.shops
    })
}

function * sagas () {
    yield takeEvery('SAGA_GET_PRODUCT' , getProduct),
    yield takeEvery('SAGA_SHOP_NOTE' , getShopsNote),
    yield takeEvery('SAGA_SELLER' , returnSeller),
    yield takeEvery('SAGA_ADD_CART' , addCart)
}

export default sagas