import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productReducer from "./Products/productReducer";
import cartReducer from "./Cart/CartReducer";

export default combineReducers({
   user: userReducer,
   productsData: productReducer,
   cartData: cartReducer
});
