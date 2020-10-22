export const getProducts = (data) => {
    
    return {
        type: 'GET_PRODUCTS',
        products: data.data 
    }
}

export const pushProducts = (data) => {
    return {
        type: 'PUSH_PRODUCTS',
        product: data
    }
}


export const removeProducts = () => {
    return {
        type: 'REMOVE_PRODUCTS',
        
    }
}