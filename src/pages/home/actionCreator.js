const getLikeShops = (limit) => {
    return {
        type: 'SAGA_GET_LIKESHOPS',
        limit,
    }
}

const changeTopVal = (val) => {
    return {
        type: 'SAGA_TOP_VAL',
        val
    }
}

const returnId = id => {
    return {
        type: 'SAGA_SHOPID',
        id
    }
}

export {
    getLikeShops,
    changeTopVal,
    returnId
}