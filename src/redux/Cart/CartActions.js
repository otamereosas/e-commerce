import CartTypes from "./CartTypes";

export const addProduct = (nextCartItem) => ({
   type: CartTypes.ADD_TO_CART,
   payload: nextCartItem,
});
