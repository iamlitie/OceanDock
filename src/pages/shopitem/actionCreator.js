const getProduct = id => {
    return {
        type: 'SAGA_GET_PRODUCT',
        id
    }
}

const getShopsNote = id => {
    return {
        type: 'SAGA_SHOP_NOTE',
        id
    }
}

const returnSeller = index => {
    return {
        type: 'SAGA_SELLER',
        index
    }
}

const addCart = (shops => {
    return {
        type: 'SAGA_ADD_CART',
        shops
    }
})

export {
    getProduct,
    getShopsNote,
    returnSeller,
    addCart
}