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
      console.log('!')
      const { data } = await axios.get("/api/products");
      console.log('data with products:',data)
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
    default:
      return state;
  }
}
