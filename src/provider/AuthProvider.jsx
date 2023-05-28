import { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut ,onAuthStateChanged, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const profileUser=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL:photo
        })

       
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            console.log('current user',currentUser)
            setLoading(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])
    const userInfo={
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        profileUser,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;