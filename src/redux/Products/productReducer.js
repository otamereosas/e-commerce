import productsTypes from "./productsTypes";

const INITIAL_STATE = {
   product: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case productsTypes.SET_PRODUCTS:
         return {
            ...state,
            product: action.payload,
         };
      default:
         return state;
   }
};

export default productReducer;
