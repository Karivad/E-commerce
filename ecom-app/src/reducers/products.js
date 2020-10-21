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
          
        case 'REMOVE_PRODUCTS':
            console.log("STATE:  ", state);
            let newState = [...state.products];
            newState.splice(0, newState.length);
            console.log("NEW STATE:  ", newState);
            return newState;
            
            
        default:
            return state
    
    }
}

export default products;