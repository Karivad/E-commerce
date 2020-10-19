import {combineReducers} from 'redux';
import isLogged from './isLogged'
import products from './products'

const allReducers = combineReducers({
    isLogged,
    products,
})
export default allReducers