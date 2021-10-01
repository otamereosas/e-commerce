import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchProductsStart } from "../../redux/Products/productsAction";
import FormSelect from "../Forms/FormSelect";
import { Main, ProductWrapper, ProductCard } from "./ProductStyles";

const mapState = ({ productsData }) => ({
   product: productsData.product,
});

const ProductsResult = () => {
   const dispatch = useDispatch();
   const history = useHistory();
   const { filterType } = useParams();
   const { product } = useSelector(mapState);

   useEffect(() => {
      dispatch(fetchProductsStart({filterType}));
   }, [filterType]);

   const handleFilter = (e) => {
      const nextFilter = e.target.value;
      history.push(`/search/${nextFilter}`);
   };

   const configFilter = {
      defaultValue: filterType,
      options: [
         {
            name: "Show All",
            value: "",
         },
         {
            name: "Mens",
            value: "mens",
         },
         {
            name: "Womens",
            value: "womens",
         },
      ],
      handleChange: handleFilter,
   };

   if (!Array.isArray(product)) return null;

   if (product.length < 1)
      return (
         <Main>
            <h1>No search results</h1>
            <FormSelect {...configFilter} />
            <p>Enable internet on your device</p>
         </Main>
      );

   return (
      <Main>
         <h1>Products</h1>
         <FormSelect {...configFilter} />
         <ProductWrapper>
            {product.map((item, index) => {
               const { productThumbnail, productName, productPrice } = item;
               if (
                  !productThumbnail ||
                  !productName ||
                  typeof productPrice === "undefined"
               )
                  return null;

               return (
                  <ProductCard key={index}>
                     <img src={productThumbnail} alt={productName} />
                     <h3>{productName}</h3>
                     <p>
                        <span id="naira">N</span> {productPrice}
                     </p>
                     <button>Add To Cart</button>
                  </ProductCard>
               );
            })}
         </ProductWrapper>
      </Main>
   );
};

export default ProductsResult;
