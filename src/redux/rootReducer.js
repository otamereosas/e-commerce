import { combineReducers } from "redux";

import userReducer from "./User/user.reducer";
import productReducer from "./Products/productReducer";

export default combineReducers({
   user: userReducer,
   productsData: productReducer,
});
