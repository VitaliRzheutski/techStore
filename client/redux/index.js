import productsReducer from "./allProducts";
import { combineReducers } from 'redux';


const appReducer = combineReducers({
    products:productsReducer,

   
   })
   
   export default appReducer