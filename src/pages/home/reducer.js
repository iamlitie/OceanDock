import { Map } from 'immutable'

let defaultState = Map({
    likeShops : [],
    limit: 1,
    topVal: 0,
    shopId: ''
})

const reducer = (state = defaultState , action) => {
    switch (action.type) {
        case 'GET_LIKESHOPS':
            return state.withMutations(value => {
                value.set('likeShops' , [...state.getIn(['likeShops']) , ...action.data])
                value.set('limit' ,state.getIn(['limit']) + 1)
            })
            // return {
            //     ...Object.assign(
            //         state,
            //         {
            //             likeShops: [
            //                 ...state.likeShops,
            //                 ...action.data
            //             ],
            //             limit: state.limit + 1
            //         }
            //     )
            // }
        case 'TOP_VAL':
            return state.set('topVal' , action.topVal)
            // return {
            //     ...Object.assign(
            //         state,
            //         {
            //             topVal: action.topVal
            //         }
            //     )
            // }
        case 'SHOPID': 
            return state.set('shopId' , action.id)
        default: 
            return state
    }
}

export default reducer