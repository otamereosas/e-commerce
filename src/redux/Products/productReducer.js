import productsTypes from "./productsTypes";

const INITIAL_STATE = {
   product: [],
   prod: {},
};

const productReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case productsTypes.SET_PRODUCTS:
         return {
            ...state,
            product: action.payload,
         };
         case productsTypes.SET_PROD:
         return{
            ...state,
            prod: action.payload
         }
      default:
         return state;
   }
};

export default productReducer;
