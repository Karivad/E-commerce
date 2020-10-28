const initialState = [] 
   

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'ADDED_CART':
        //    let newState = state.ids.push(action.payload)
            return state.concat(action.payload)

        
        default:
            return state
    
    }
}

export default cartReducer;