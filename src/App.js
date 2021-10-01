import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import { setCurrentUser } from "./redux/User/user.action";
import { auth, handleUserData } from "./components/firebase/utils";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import WithAdminAuth from "./Admin/HOC/withAdminAuth";
import Toolbar from "./components/AdminComponents/toolbar/Toolbar";
import ProductsPage from "./pages/Productspage";

function App() {   

   const dispatch = useDispatch()

   useEffect(() => {
      const authListener = auth.onAuthStateChanged(async (user) => {
         if (user) {
            const userRef = await handleUserData(user);
            userRef.onSnapshot((snapshot) => {
               dispatch(setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data(),
               }));
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
         <Toolbar/>
         <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
               exact
               path="/dashboard"
               render={() => <Dashboard />}
            />
            <Route
               exact
               path="/search"
               render={() => <ProductsPage/>}
            />
            <Route
               exact
               path="/search/:filterType"
               render={() => <ProductsPage/>}
            />
            <Route
               exact
               path="/admin"
               render={() => 
               <WithAdminAuth>
                  <Admin />
               </WithAdminAuth>
            }
            />
         </Switch>
      </>
   );
}


export default App;
