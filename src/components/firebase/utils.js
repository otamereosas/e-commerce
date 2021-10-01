import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export function signInWithGoogle() {
   auth
      .signInWithPopup(provider)
      .then((result) => {
         console.log("user has been signed in");
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(
            `error occured during signin : ${errorCode}, ${errorMessage}`
         );
      });
}

export function signOutFromGoogle() {
   auth.signOut();
}

export const handleUserData = async (user, additionalData) => {
   if (!user) {
      return;
   }

   const { uid } = user;

   const userRef = firestore.doc(`users/${uid}`);
   const snapshot = await userRef.get();

   if (!snapshot.exists) {
      const { displayName, email } = user;
      const timestamp = new Date();
      const userRoles = ['user']

      try {
        await userRef.set({
          displayName,
          email,
          createdDate: timestamp,
          userRoles,
          ...additionalData
        });
      } catch(err){

      }
      
   }

   return userRef;
};
