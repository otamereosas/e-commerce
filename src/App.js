import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { setCurrentUser } from "./redux/User/user.action";
import { auth, handleUserData } from "./components/firebase/utils";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import WithAdminAuth from "./Admin/HOC/withAdminAuth";
import Toolbar from "./components/AdminComponents/toolbar/Toolbar";
import ProductsPage from "./pages/Productspage";
import ProductDetails from "./pages/ProductDetails";
import CheckoutPage from "./pages/Checkout";
import GlobalStyles from "./GlobalStyles";
import Category from "./pages/Category";

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      const authListener = auth.onAuthStateChanged(async (user) => {
         if (user) {
            const userRef = await handleUserData(user);
            userRef.onSnapshot((snapshot) => {
               dispatch(
                  setCurrentUser({
                     id: snapshot.id,
                     ...snapshot.data(),
                  })
               );
            });
         } else {
            dispatch(setCurrentUser(user));
            console.log("user signed out");
         }
      });

      return () => {
         authListener();
      };
   }, [dispatch]);

   return (
      <>
         <GlobalStyles />
         <Toolbar />
         <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/dashboard" render={() => <Dashboard />} />
            <Route exact path="/category" render={() => <Category />} />
            <Route exact path="/search" render={() => <ProductsPage />} />
            <Route
               exact
               path="/search/:filterType"
               render={() => <ProductsPage />}
            />
            <Route exact path="/checkout" render={() => <CheckoutPage />} />
            <Route
               exact
               path="/product/:productID"
               render={() => <ProductDetails />}
            />
            <Route
               exact
               path="/admin"
               render={() => (
                  <WithAdminAuth>
                     <Admin />
                  </WithAdminAuth>
               )}
            />
         </Switch>
      </>
   );
}

export default App;
