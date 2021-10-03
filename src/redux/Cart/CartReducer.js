import CartTypes from "./CartTypes";
import { handleAddToCart, handleRemoverCartItem } from "./CartUtils";

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
         case CartTypes.REMOVE_CART_ITEM:
            return {
               ...state,
               cartItems: handleRemoverCartItem({
                  prevCartItems: state.cartItems,
                  cartItemToRemove: action.payload
               })
            }
      default:
         return state;
   }
};

export default cartReducer;
