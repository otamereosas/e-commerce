import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavWrapper, Nav, NavLinks } from "./NavbarStyles";
import { signInWithGoogle, signOutFromGoogle } from "../firebase/utils";
import { selectCartItemsCount } from "../../redux/Cart/CartSelector";
import cart from "../../assets/cart.png";

const Navbar = () => {
   const mapState = (state) => ({
      currentUser: state.user.currentUser,
      totalNumCartItems: selectCartItemsCount(state),
   });
   const { currentUser, totalNumCartItems } = useSelector(mapState);

   return (
      <NavWrapper>
         <Nav>
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
               <Link to="/checkout">
                  <img src={cart} alt="cart" />
                  <span>{totalNumCartItems}</span>
               </Link>
            </NavLinks>

            <div className="home">
               <Link to="/">
                  <h1>Grocery-List</h1>
               </Link>
            </div>
         </Nav>
         <input type="search" placeholder="what are you looking for?" />
      </NavWrapper>
   );
};

export default Navbar;
