import React from "react";
import Main from "../components/AdminComponents/Main/Main";
import SideNav from "../components/AdminComponents/sideNav/SideNav";
import Footer from "../components/Footer/Footer";

const Admin = () => {
   return (
      <div className="admin">
         <SideNav />
         <Main />
         <Footer/>
      </div>
   );
};

export default Admin;
