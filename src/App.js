import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { auth, handleUserData } from "./components/firebase/utils";

function App() {
   const [userIsLogedIn, setUserIsLogedIn] = useState(null);

   useEffect(() => {
      auth.onAuthStateChanged(async user=> {
         if (user) {
            const userRef = await handleUserData(user)
            userRef.onSnapshot(snapshot => {

               setUserIsLogedIn({
                  userIsLogedIn: {
                     id: snapshot.id,
                     ...snapshot.data()
                  }
               });
            })
         } else {
            setUserIsLogedIn(null);
            console.log("user signed out");
         }
      });
   }, []);

   return (
      <>
         <GlobalStyles />
         <Switch>
            <Route exact path="/" render={() => <Home userIsLogedIn={userIsLogedIn} />} />
         </Switch>
         <Switch>
            <Route exact path="/register" render={() => <Register />} />
         </Switch>
         <Switch>
            <Route
               exact
               path="/login"
               render={() =>userIsLogedIn? <Redirect to="/" /> : <Login userIsLogedIn={userIsLogedIn} />}
            />
         </Switch>
      </>
   );
}

export default App;
