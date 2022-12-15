import axios from "axios";

//action type
const GET_PRODUCTS = "GET_PRODUCTS";
const initialState = [];

//ation creator
export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products,
  };
};

export const fetchProductsThunk = () => {
  //thunk
  return async (dispatch) => {
    try {
      // console.log('!')
      const { data } = await axios.get("/api/products");
      // console.log('data with products:',data)
      dispatch(getProducts(data));
    } catch (error) {
      console.log(error);
    }
  };
};
//reducer
export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    // case ADD_PRODUCT:
    //   return [...state, action.product];
    // case DELETE_PRODUCT:
    //   return state.filter((product) => product.id !== action.id);
    // case UPDATE_PRODUCT:
    //   return {
    //     ...state,
    //     productName: action.name,
    //     description: action.description,
    //     price: action.price,
    //     quantity: action.quantity,
    //   };
    default:
      return state;
  }
}
