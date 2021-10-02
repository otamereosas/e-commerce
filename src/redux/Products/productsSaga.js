import { auth } from "../../components/firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import { setProducts, fetchProductsStart, SetProd } from "./productsAction";
import {
   handleAddProduct,
   handleFetchProducts,
   handleDeleteProduct,
   handlefetchSingleProduct,
} from "./productHelpers";
import productsTypes from "./productsTypes";

export function* addProduct({ payload }) {
   try {
      const timeStamp = new Date();
      yield handleAddProduct({
         ...payload,
         productAdminUserUID: auth.currentUser.uid,
         createdDate: timeStamp,
      });
      yield put(fetchProductsStart());
   } catch (err) {}
}

export function* onAddProductStart() {
   yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload: { filterType } }) {
   try {
      const products = yield handleFetchProducts({ filterType });
      yield put(setProducts(products));
   } catch (err) {}
}

export function* onFectchProductsStart() {
   yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
   try {
      yield handleDeleteProduct(payload);
      yield put(fetchProductsStart());
   } catch (err) {
      // console.log(err)
   }
}

export function* onDeleteProductStart() {
   yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
   try {
      const prod = yield handlefetchSingleProduct(payload);
      yield put(SetProd(prod));
   } catch (err) {
      // console.log(err)
   }
}

export function* onFetchProduct() {
   yield takeLatest(productsTypes.FETCH_PRODUCT, fetchProduct);
}

export default function* productsSagas() {
   yield all([
      call(onAddProductStart),
      call(onFectchProductsStart),
      call(onDeleteProductStart),
      call(onFetchProduct),
   ]);
}
