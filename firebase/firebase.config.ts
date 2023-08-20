// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCSdZmm2C3PhuABwlunacsG6IeHJe9EL4g",
//   authDomain: "library18.firebaseapp.com",
//   projectId: "library18",
//   storageBucket: "library18.appspot.com",
//   messagingSenderId: "272956656684",
//   appId: "1:272956656684:web:4d894c34b6979689795589",
//   measurementId: "G-BRKGZ707VV"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const authApp = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4bWJZfvkhZ-MmLmQJEJwdWOk1SCQKu1w",
  authDomain: "library-18-7da22.firebaseapp.com",
  projectId: "library-18-7da22",
  storageBucket: "library-18-7da22.appspot.com",
  messagingSenderId: "747937806837",
  appId: "1:747937806837:web:dd7513679a670b904f48bc",
  measurementId: "G-H6YBVXFDL8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authApp = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);