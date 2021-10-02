import productsTypes from "./productsTypes";

export const addProductStart = (productData) => ({
   type: productsTypes.ADD_NEW_PRODUCT_START,
   payload: productData,
});


export const fetchProductsStart = (filters={}) => ({
   type: productsTypes.FETCH_PRODUCTS_START,
   payload: filters
 });

export const setProducts = products => ({
   type: productsTypes.SET_PRODUCTS,
   payload: products
})

export const deleteProductStart = productID => ({
   type: productsTypes.DELETE_PRODUCT_START,
   payload: productID
})

export const fetchProduct = productID => ({
   type: productsTypes.FETCH_PRODUCT,
   payload: productID
})

export const SetProd = prod => ({
   type: productsTypes.SET_PROD,
   payload: prod
})