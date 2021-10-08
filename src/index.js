import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCdyCUiGGldUtUcnOGm7aMvkuLXnLG61k0",
    authDomain: "burger-queen-laboratoria-65e32.firebaseapp.com",
    projectId: "burger-queen-laboratoria-65e32",
    storageBucket: "burger-queen-laboratoria-65e32.appspot.com",
    messagingSenderId: "1043697230267",
    appId: "1:1043697230267:web:ccbdcadd09d7d1df91249e",
    measurementId: "G-W5Z3GTWL2N"
};

initializeApp(firebaseConfig);



ReactDOM.render(
<App />,
  document.getElementById('root')
);
