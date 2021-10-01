import React from "react";
import { useSelector } from "react-redux";
import image from "../../../assets/image1.jpg";
import { SideNavWrapper } from "./SideNavStyles";
import { signOutFromGoogle } from "../../firebase/utils";
import { Link } from "react-router-dom";

const SideNav = () => {
   const mapState = ({ user }) => ({
      currentUser: user.currentUser,
   });
   const { currentUser } = useSelector(mapState);

   return (
      <SideNavWrapper>
         <Link to="/">
            <h1>NUEL-STORE</h1>
         </Link>
         <h3>Dashboard</h3>
         <img src={image} alt="admin" title="admin" />
         <h3>{currentUser.displayName}</h3>
         <h3>{currentUser.email}</h3>
         <button onClick={signOutFromGoogle}>Sign out</button>
      </SideNavWrapper>
   );
};

export default SideNav;
