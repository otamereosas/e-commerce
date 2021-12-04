import React from "react";
import { useState, useEffect } from "react";
import {
   addProductStart,
   fetchProductsStart,
   deleteProductStart,
} from "../../../redux/Products/productsAction";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../Forms/FormInput";
import FormSelect from "../../Forms/FormSelect";
import { CKEditor } from "ckeditor4-react";

const mapState = ({ productsData, user }) => ({
   product: productsData.product,
   currentUser: user.currentUser,
});

const Modal = ({ hidemodal, toggleModal }) => {
   const { product, currentUser } = useSelector(mapState);
   const dispatch = useDispatch();
   const [productName, setProductName] = useState("");
   const [productCategory, setProductCategory] = useState("");
   const [productThumbnail, setProductThumbnail] = useState("");
   const [productPrice, setProductPrice] = useState(0);
   const [productDesc, setProductDesc] = useState("");

   useEffect(() => {
      dispatch(fetchProductsStart());
   }, [dispatch]);

   const resetForm = () => {
      setProductCategory("Fruits");
      setProductName("");
      setProductThumbnail("");
      setProductPrice(0);
      setProductDesc("");
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(
         addProductStart({
            productCategory,
            productName,
            productThumbnail,
            productPrice,
            productDesc,
         })
      );
      resetForm();
      toggleModal();
   };

   return (
      <div>
         {hidemodal && (
            <div className="modal">
               <form onSubmit={handleSubmit}>
                  <h2>Add a Product</h2>

                  {currentUser.subAdmin ? (
                     <FormSelect
                        label=""
                        options={[
                           {
                              value: "Fruits",
                              name: "Fruits",
                           },
                           {
                              value: "Vegetable",
                              name: "Vegetable",
                           },
                           {
                              value: "Canned Goods",
                              name: "Canned Goods",
                           },
                           {
                              value: "Frozen Foods",
                              name: "Frozen Foods",
                           },
                           {
                              value: "Meat",
                              name: "Meat",
                           },
                           {
                              value: "Fish ands shellfish",
                              name: "Fish ands shellfish",
                           },
                           {
                              value: "Deli",
                              name: "Deli",
                           },
                           {
                              value: "Condiments and Spices",
                              name: "Condiments and Spices",
                           },
                           {
                              value: "Sauces and Oil",
                              name: "Sauces and Oil",
                           },
                           {
                              value: "Snacks",
                              name: "Snacks",
                           },
                           {
                              value: "Bread and Bakery",
                              name: "Bread and Bakery",
                           },
                           {
                              value: "Pasta and Rice",
                              name: "Pasta and Rice",
                           },
                           {
                              value: "Cereal",
                              name: "Cereal",
                           },
                           {
                              value: "Baking",
                              name: "Baking",
                           },
                           {
                              value: "Personal Care",
                              name: "Personal Care",
                           },
                           {
                              value: "Tubers",
                              name: "Tubers",
                           },
                           {
                              value: "Health Care",
                              name: "Health Care",
                           },
                           {
                              value: "Paper and Wraps",
                              name: "Paper and Wraps",
                           },
                           {
                              value: "Household Supplies",
                              name: "Household Supplies",
                           },
                           {
                              value: "Baby Items",
                              name: "Baby Items",
                           },
                           {
                              value: "Other Items",
                              name: "Other Items",
                           },
                        ]}
                        handleChange={(e) => setProductCategory(e.target.value)}
                     />
                  ) : (
                     <FormSelect
                        label=""
                        options={[
                           {
                              value: "Fruits",
                              name: "Fruits",
                           },
                        ]}
                        handleChange={(e) => setProductCategory(e.target.value)}
                     />
                  )}

                  <FormInput
                     label="Name"
                     type="text"
                     value={productName}
                     handleChange={(e) => setProductName(e.target.value)}
                  />

                  <FormInput
                     label="Main Image URL"
                     type="url"
                     value={productThumbnail}
                     handleChange={(e) => setProductThumbnail(e.target.value)}
                  />

                  <FormInput
                     label="Price"
                     type="number"
                     min="0.00"
                     max="1000000.00"
                     step="0.01"
                     value={productPrice}
                     handleChange={(e) => setProductPrice(e.target.value)}
                  />

                  <CKEditor
                     onChange={(evt) => setProductDesc(evt.editor.getData())}
                  />

                  <button>Add Product</button>
               </form>
            </div>
         )}
         <div>
            <table>
               <tbody>
                  <tr>
                     <th>
                        <h1>Manage Products</h1>
                     </th>
                  </tr>
                  <tr>
                     <td>
                        <table>
                           <tbody>
                              {product.map((item) => {
                                 const {
                                    productName,
                                    productCategory,
                                    productThumbnail,
                                    productPrice,
                                    documentID,
                                 } = item;

                                 return (
                                    <tr className="Adminproduct">
                                       <td>
                                          <img
                                             src={productThumbnail}
                                             alt={productName}
                                          />
                                       </td>
                                       <td>{productCategory}</td>
                                       <td>{productName}</td>
                                       <td>
                                          <span id="naira">N</span>
                                          {productPrice}
                                       </td>
                                       <td>
                                          <button
                                             onClick={() =>
                                                dispatch(
                                                   deleteProductStart(
                                                      documentID
                                                   )
                                                )
                                             }
                                          >
                                             Delete
                                          </button>
                                       </td>
                                    </tr>
                                 );
                              })}
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Modal;
