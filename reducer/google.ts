import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase.config";



const auth = getAuth(app);

export const loginWithGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).catch(r=>console.log(r))
} 

export const signin = (userDate:UserData) => {
  if(userDate.user && userDate.password) {
    createUserWithEmailAndPassword(
        auth, 
        userDate.user, 
        userDate.password);
  }
};
export const loginWithEmail = (userDate:UserData) => {
  console.log("llegamos")
  const password = userDate.password
  if(userDate.user && userDate.password && password) {
    signInWithEmailAndPassword(
      auth, 
      userDate.user,  
      password
      )
  }

};