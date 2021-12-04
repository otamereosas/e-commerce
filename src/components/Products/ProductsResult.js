import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   Link,
   // useHistory,
   useParams,
} from "react-router-dom";
import Slider from "react-slick";
import { fetchProductsStart } from "../../redux/Products/productsAction";
import { addProduct } from "../../redux/Cart/CartActions";
// import FormSelect from "../Forms/FormSelect";
import { Main, ProductWrapper, ProductCard } from "./ProductStyles";
import { categogyList } from "../data/categories";

const mapState = ({ productsData }) => ({
   product: productsData.product,
});

const ProductsResult = () => {
   const dispatch = useDispatch();
   // const history = useHistory();
   const { filterType } = useParams();
   const { product } = useSelector(mapState);

   const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 6,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 2,
               initialSlide: 0,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 2,
            },
         },
      ],
   };

   useEffect(() => {
      dispatch(fetchProductsStart({ filterType }));
   }, [dispatch, filterType]);

   // const handleFilter = (e) => {
   //    const nextFilter = e.target.value;
   //    history.push(`/search/${nextFilter}`);
   // };

   // const configFilter = {
   //    defaultValue: filterType,
   //    options: [
   //       {
   //          value: "",
   //          name: "All Products",
   //       },
   //       {
   //          value: "Fruits",
   //          name: "Fruits",
   //       },
   //       {
   //          value: "Vegetable",
   //          name: "Vegetable",
   //       },
   //       {
   //          value: "Canned Goods",
   //          name: "Canned Goods",
   //       },
   //       {
   //          value: "Frozen Foods",
   //          name: "Frozen Foods",
   //       },
   //       {
   //          value: "Meat",
   //          name: "Meat",
   //       },
   //       {
   //          value: "Fish ands shellfish",
   //          name: "Fish ands shellfish",
   //       },
   //       {
   //          value: "Deli",
   //          name: "Deli",
   //       },
   //       {
   //          value: "Condiments and Spices",
   //          name: "Condiments and Spices",
   //       },
   //       {
   //          value: "Sauces and Oil",
   //          name: "Sauces and Oil",
   //       },
   //       {
   //          value: "Snacks",
   //          name: "Snacks",
   //       },
   //       {
   //          value: "Bread and Bakery",
   //          name: "Bread and Bakery",
   //       },
   //       {
   //          value: "Pasta and Rice",
   //          name: "Pasta and Rice",
   //       },
   //       {
   //          value: "Cereal",
   //          name: "Cereal",
   //       },
   //       {
   //          value: "Baking",
   //          name: "Baking",
   //       },
   //       {
   //          value: "Personal Care",
   //          name: "Personal Care",
   //       },
   //       {
   //          value: "Tubers",
   //          name: "Tubers",
   //       },
   //       {
   //          value: "Health Care",
   //          name: "Health Care",
   //       },
   //       {
   //          value: "Paper and Wraps",
   //          name: "Paper and Wraps",
   //       },
   //       {
   //          value: "Household Supplies",
   //          name: "Household Supplies",
   //       },
   //       {
   //          value: "Baby Items",
   //          name: "Baby Items",
   //       },
   //       {
   //          value: "Other Items",
   //          name: "Other Items",
   //       },
   //    ],
   //    handleChange: handleFilter,
   // };

   if (!Array.isArray(product)) return null;

   if (product.length < 1)
      return (
         <Main>
            <div className="slider">
               <Slider {...settings}>
                  {categogyList.map((items, index) => {
                     return (
                        <div>
                           <Link to={items.link}>
                              <button className="categories">
                                 {items.name}
                              </button>
                           </Link>
                        </div>
                     );
                  })}
               </Slider>
            </div>
            <h1>No search results</h1>
            {/* <FormSelect {...configFilter} /> */}
            <p>Enable internet on your device</p>
         </Main>
      );

   const handleAddToCart = (item) => {
      if (!item) return;
      dispatch(addProduct(item));
   };

   return (
      <Main>
         <div>
            <br />
            <Slider {...settings}>
               {categogyList.map((items, index) => {
                  return (
                     <div>
                        <Link to={items.link}>
                           <button className="categories">{items.name}</button>
                        </Link>
                     </div>
                  );
               })}
            </Slider>
         </div>
         <h1>Products</h1>
         {/* <FormSelect {...configFilter} /> */}
         <ProductWrapper>
            {product.map((item, index) => {
               const {
                  documentID,
                  productThumbnail,
                  productName,
                  productPrice,
               } = item;
               if (
                  !documentID ||
                  !productThumbnail ||
                  !productName ||
                  typeof productPrice === "undefined"
               )
                  return null;

               return (
                  <ProductCard key={index}>
                     <Link to={`/product/${documentID}`}>
                        <img src={productThumbnail} alt={productName} />
                     </Link>
                     <div className="content">
                        <Link to={`/product/${documentID}`}>
                           <h3>{productName}</h3>
                        </Link>
                        <p>
                           <span id="naira">N</span> {productPrice}
                        </p>
                        <button onClick={() => handleAddToCart(item)}>
                           Add To Cart
                        </button>
                     </div>
                  </ProductCard>
               );
            })}
         </ProductWrapper>
      </Main>
   );
};

export default ProductsResult;
