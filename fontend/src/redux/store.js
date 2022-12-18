
import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getProductsReducer  , getProductDetailsReducer} from './reducers/productReducer';
import {getCartReducer} from './reducers/cartReducer';
const reducer = combineReducers( {
    cart : getCartReducer,
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailsReducer
})

const middleware = [thunk];

const cartFromLocalStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];



const INITCIAL_STATE = {
    cart : cartFromLocalStore
}
const store = createStore(
    reducer,
    INITCIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;