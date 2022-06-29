import { call , put ,takeEvery } from 'redux-saga/effects'

import { get }  from 'utils/http'

function * getLikeShops (action) {
    const likeShops = yield call(get ,
        { url: '/api/home/api/getLikeList' , 
            params: {
                pageNub: action.limit,
                pageSize: 20
        } }
    )
    yield put({
        // 派发到reducer里
        type: 'GET_LIKESHOPS',
        data: likeShops.likeProductInfo,
    })
}

function * changeTopVal (action) {
    yield put({
        type: 'TOP_VAL',
        topVal: action.val
    })
}

function * returnId (id) {
    yield put({
        type: 'SHOPID',
        id
    })
}

function * sagas () {
    yield takeEvery('SAGA_GET_LIKESHOPS' , getLikeShops)
    yield takeEvery('SAGA_TOP_VAL' , changeTopVal)
    yield takeEvery('SAGA_SHOPID' , returnId)
} 

export default sagas
