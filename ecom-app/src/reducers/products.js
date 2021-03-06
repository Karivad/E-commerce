const initialState = {
    products: []
}

const products = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_PRODUCTS': 
        return {
            ...state,
            products: action.products
          }

        case 'PUSH_PRODUCTS':
            
            return {

            products: [...state.products, action.product]

            }
          
        case 'REMOVE_PRODUCTS':
            // console.log("STATE:  ", state);
            // let newState = [...state.products];
            // newState.splice(0, newState.length);
            // console.log("NEW STATE:  ", newState);
            // return newState;
            return initialState
            
        
        case 'DELETE_PRODUCT':
            let newState = state.products.filter(product => product.id !== action.id);   
            console.log("NEW STATE:  ", newState);
            return {
                ...state,
                products: newState
            }   

            
        case 'EDIT_PRODUCT':
            let newProduct = state.products.filter(product => product.id !== action.id);   
            newProduct.push(action.product)
            console.log("NEW STATE:  ", newProduct);
            return {
                ...state,
                products: newProduct
            }
            
        default:
            return state


    
    }
}

export default products;