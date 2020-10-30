export const addingCartStore  = (data) => {
    
    return {
        type: 'ADDED_CART',
        payload: data
    }
}
export const deleteProduct  = (id) => {
    
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}

export const setQuantity  = (id, qty) => {
    
    return {
        type: 'SET_QUANTITY',
        payload: {
            id: id,
            qty: qty
        }
    }
}