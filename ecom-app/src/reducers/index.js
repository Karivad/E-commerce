import {combineReducers} from 'redux';
import isLogged from './isLogged'
import products from './products'
import cartReducer from './cartReducer'

const allReducers = combineReducers({
    isLogged,
    products,
    cartReducer
})
export default allReducers