export const getProducts = (data) => {
    
    return {
        type: 'GET_PRODUCTS',
        products: data.data 
    }
}

export const pushProducts = (data) => {
    console.log(data)
    return {
        type: 'PUSH_PRODUCTS',
        product: data
    }
}


export const removeProducts = () => {   /// lors du sign out : supprime tous les produits
    return {
        type: 'REMOVE_PRODUCTS',
        
    }
}


export const deleteProducts = (id) => {   //// supprime UN produit de la liste
    return {
        type: 'DELETE_PRODUCT',
        id: id
    }
}

export const editProducts = (data, id) => {   //// edit UN produit de la liste
    return {
        type: 'EDIT_PRODUCT',
        product: data,
        id: id
    }
}