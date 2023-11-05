import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../FireBase/Firebase.config';


export const AuthContext =createContext(null);

const googleLogin = new GoogleAuthProvider();

const AuthProvider = ({children}) =>{
    const [user, setUser] =useState(null);
    const [loading ,setLoading] = useState(true)

    const registerUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const LogInUser = (email,password) =>{
        setLoading(true)
           return signInWithEmailAndPassword(auth,email,password);
    }

    const LogInWithGoogle = () =>{
        setLoading(true)
          return signInWithPopup(auth,googleLogin);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])


    const authInfo = {registerUser,LogInUser,LogInWithGoogle,logOut,user,loading}

    return(
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    )
}

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
}