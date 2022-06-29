import { Map } from 'immutable'

let defaultState = Map({
    product: '',
    note: '',
    sellerIndex: '',
    productsAddCart: [],
})

const reducer = (state = defaultState , action) => {
    switch (action.type) {
        case 'GET_SHOP': 
            return state.set('product' , action.info)
        case 'GET_SHOP_NOTE': 
            return state.set('note' , action.note)
        case 'SELLER': 
            return state.set('sellerIndex' , action.index)
        case 'ADD_CART':
            return state.set('productAddCart' , action.addCart)
        default: 
            return state
    }
}

export default reducer