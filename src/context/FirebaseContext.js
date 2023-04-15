import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase.js"
import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useCart } from "./CardContext.js";
import toast from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const FirebaseContext = createContext();


export const FirebaseProvider = ({ children }) => {

    const { setCart } = useCart()
    const navigate = useNavigate()
    const [user, setUser] = useState("")
    const [loginMessage, setLoginMessage] = useState("")
    const [registerMessage, setRegisterMessage] = useState("")

    const register = async (name, email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser, { displayName: name })
            console.log("sign succes", result);
            navigate("/")
       

        }
        catch (error) {
            console.log("sign error ", error);
        }

    }

    const signIn = async (email, password) => {
        try {
            const signIn = await signInWithEmailAndPassword(auth, email, password)
            toast.success(`Giriş Başarılı`, {
                duration: 2000,
            })
            setTimeout(() => {
                navigate("/")
            }, 2000)



        }
        catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
            toast.error(errorMessage);
            setLoginMessage(errorMessage)
        };

    }
    const handleLogout = () => {
        auth.signOut()
        navigate("/Login")
        //console.log("çıkış yapıldı");

    }
    const authListener = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                const data = localStorage.getItem(JSON.stringify(user.uid))
                const newData = JSON.parse(data)
                setCart(newData || [])
                console.log(newData);
            } else {
                setUser(null)
                setCart([])
            }
            console.log("authlistener çalıştı");
        })
    }
    useEffect(() => {
        authListener()

    }, [])




    return (
        <FirebaseContext.Provider value={{ register, signIn, user, handleLogout, loginMessage }}
        >{children}
        </FirebaseContext.Provider>
    )

}


export default FirebaseContext;