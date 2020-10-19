const initialState = {
    products: []
}

const products = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS': 
        return action.products
        case 'REMOVE_PRODUCTS':
            return initialState
        default:
            return state
    
    }
}

export default products;