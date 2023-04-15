import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCmUP3IZT1NhCt42YTvlihZ05_wlBHO4X0",
    authDomain: "live-login-register-fad2a.firebaseapp.com",
    projectId: "live-login-register-fad2a",
    storageBucket: "live-login-register-fad2a.appspot.com",
    messagingSenderId: "388009160449",
    appId: "1:388009160449:web:0ef63a5c9127a60be93500"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)