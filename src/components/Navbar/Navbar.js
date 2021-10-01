import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Nav, NavLinks } from "./NavbarStyles";
import { signInWithGoogle, signOutFromGoogle } from "../firebase/utils";
import search from '../../assets/search.png'

const Navbar = () => {
   const mapState = ({ user }) => ({
      currentUser: user.currentUser,
   });
   const { currentUser } = useSelector(mapState);

   return (
      <Nav>
         <div className="home">
            <Link to="/">
               <h1>NUEL-STORE</h1>
            </Link>
            <Link to="/search">
               <img src={search} className="search" alt="search"/>
            </Link>
         </div>
         <NavLinks>
            {currentUser && (
               <Link to="/dashboard">
                  <p>{currentUser.displayName}</p>
               </Link>
            )}

            {currentUser ? (
               <p className="lastChild" onClick={signOutFromGoogle}>
                  Logout
               </p>
            ) : (
               <p className="lastChild" onClick={signInWithGoogle}>
                  Login
               </p>
            )}
         </NavLinks>
      </Nav>
   );
};

export default Navbar;
