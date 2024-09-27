import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTE13HQGMilvn921E73XYs_MWWXEyT2kY",
    authDomain: "authvue-c4590.firebaseapp.com",
    projectId: "authvue-c4590",
    storageBucket: "authvue-c4590.appspot.com",
    messagingSenderId: "485363801067",
    appId: "1:485363801067:web:2691fd06b8b932e359d7ae",
    measurementId: "G-9SYNWE0F4Z"
};

initializeApp(firebaseConfig);

/// DB
const DB = getFirestore();
export { DB }