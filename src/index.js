import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.css"
import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyAZsE_Jqjz0dtZ-Iu1Dr8_v-qk8-uNyxqY",
    authDomain: "messanger-6d12d.firebaseapp.com",
    projectId: "messanger-6d12d",
    storageBucket: "messanger-6d12d.appspot.com",
    messagingSenderId: "284163762449",
    appId: "1:284163762449:web:7928b78b6d785464c004b0"
});
export const Context = createContext()

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
      firebase,auth,firestore
  }}>

    <App />
  </Context.Provider>,
  document.getElementById('root')
);

