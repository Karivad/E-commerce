

const initialState = [] 
   

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'ADDED_CART':
        //    let newState = state.ids.push(action.payload)
            return state.concat(action.payload)
        case 'DELETE_PRODUCT': 
            let newState = state.filter(e => e.id !== action.payload)
            return newState
        case 'SET_QUANTITY': 
            let changedQty = state.filter(e => e.id === action.payload.id) //element qui a une nouvelle quantité
            let index = state.indexOf(changedQty[0])
            changedQty[0].qty = action.payload.qty
            let updateState = state
            updateState[index] = changedQty
            console.log({index: index, changedQty: changedQty, updateState: updateState})
            return updateState
        
        default:
            return state
    
    }
}

export default cartReducer;