import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYgftx4Y_MrA53Bbh1SbaPaAQB0yIJCls",
  authDomain: "fir-authentication-app-63b45.firebaseapp.com",
  projectId: "fir-authentication-app-63b45",
  storageBucket: "fir-authentication-app-63b45.appspot.com",
  messagingSenderId: "143406751764",
  appId: "1:143406751764:web:08241d071e34abcf218701",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
