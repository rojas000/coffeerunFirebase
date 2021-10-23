// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
(function(window){
  'use strict'
  var App = window.App || {};
  var FirebaseConfig = {
    apiKey: "AIzaSyCK3Q4BeNm53rD1xWLump9PfcF7f5Pv91M",
    authDomain: "coffeerun-1e7e3.firebaseapp.com",
    projectId: "coffeerun-1e7e3",
    storageBucket: "coffeerun-1e7e3.appspot.com",
    messagingSenderId: "1088046083138",
    appId: "1:1088046083138:web:7ce7e1f4f9211ee36f91db"
  };
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;
})(window);
