import React from "react";
import Main from "../components/AdminComponents/Main/Main";
import SideNav from "../components/AdminComponents/sideNav/SideNav";

const Admin = () => {
   return (
      <div className="admin">
         <SideNav />
         <Main />
      </div>
   );
};

export default Admin;
