import CartTypes from "./CartTypes";

export const addProduct = (nextCartItem) => ({
   type: CartTypes.ADD_TO_CART,
   payload: nextCartItem,
});

export const removeCartItem = (cartItem) => ({
   type: CartTypes.REMOVE_CART_ITEM,
   payload: cartItem,
});
