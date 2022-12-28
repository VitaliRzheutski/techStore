import productsReducer from "./allProducts";
import singleProductReducer from "./singleProduct";
import usersReducer from "./allUsers";
import { combineReducers } from 'redux';
import cartReducer from './cart'
import {reducerUser} from './user'

const appReducer = combineReducers({
    allProducts:productsReducer,
    singleProduct:singleProductReducer,
    allUsers:usersReducer,
    cart:cartReducer,
    user:reducerUser
   
   })
   
   export default appReducer