import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/Products/productsAction";
import {addProduct} from '../../redux/Cart/CartActions'
import { Wrapper, Desc } from "./ProductDetailsCardStyles";

const mapState = (state) => ({
   prod: state.productsData.prod,
});

const ProductDetailsCard = () => {
   const dispatch = useDispatch();
   const { productID } = useParams();
   const { prod } = useSelector(mapState);

   const { productName, productThumbnail, productPrice, productDesc } = prod;

   useEffect(() => {
      dispatch(fetchProduct(productID));
   }, []);

   const handleAddToCart = (prod) => {
      if(!prod) return
      dispatch(
         addProduct(prod)
      )
   }
   

   return (
      <Wrapper>
         <div>
            <h1>{productName}</h1>
            <img src={productThumbnail} alt={productName} />
            <h3>Product Name: {productName}</h3>
            <h4>
               Price: <span id="naira">N</span> {productPrice}
            </h4>
            <button onClick={()=>handleAddToCart(prod)}>Add {productName} To Cart</button>
         </div>
         <Desc>
            <p dangerouslySetInnerHTML={{ __html: productDesc }} />
         </Desc>
      </Wrapper>
   );
};

export default ProductDetailsCard;
