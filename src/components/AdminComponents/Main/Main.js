import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { MainWrapper } from "./MainStyles";

const Main = () => {
   const [hidemodal, setHidemodal] = useState(true);

   const toggleModal = () => {
      setHidemodal(!hidemodal);
   };

   return (
      <MainWrapper>
         <button onClick={toggleModal}>
            {hidemodal? "Remove Modal" : "Add New Prodcuct"}
         </button>
         <Modal
            hidemodal={hidemodal}
            toggleModal={toggleModal}
         />
         
      </MainWrapper>
   );
};

export default Main;
