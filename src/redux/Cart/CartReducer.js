import CartTypes from "./CartTypes";
import { handleAddToCart } from "./CartUtils";

const INITIAL_STATE = {
   cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case CartTypes.ADD_TO_CART:
         return {
            ...state,
            cartItems: handleAddToCart({
              prevCartItems: state.cartItems,
              nextCartItem: action.payload
            })
         };
      default:
         return state;
   }
};

export default cartReducer;
