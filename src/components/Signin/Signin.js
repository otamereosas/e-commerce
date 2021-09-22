import React from "react";
import { Link } from "react-router-dom";
import { AuthWrapper } from "./SigninStyles";
import { signInWithGoogle, signOutFromGoogle } from "../firebase/utils";

const Signin = (props) => {
   const { userIsLogedIn } = props;

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <AuthWrapper>
         <form onSubmit={handleSubmit}>
            <Link to="/">
               <h1>NUEL-STORE</h1>
            </Link>
            {userIsLogedIn ? (
               <button onClick={signOutFromGoogle}>sign Out</button>
            ) : (
               <button onClick={signInWithGoogle}>sign in with google</button>
            )}
            <p>
               <Link to="/register">
                  click<span>&nbsp;here&nbsp;</span>
               </Link>{" "}
               to register
            </p>
         </form>
      </AuthWrapper>
   );
};

export default Signin;
