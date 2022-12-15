import productsReducer from "./allProducts";
import singleProductReducer from "./singleProduct";
import usersReducer from "./allUsers";
import { combineReducers } from 'redux';


const appReducer = combineReducers({
    allProducts:productsReducer,
    singleProduct:singleProductReducer,
    allUsers:usersReducer

   
   })
   
   export default appReducer