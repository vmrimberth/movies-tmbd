import { signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth, provider } from '../firebase'

const AuthContext = createContext()


export const AuthProvider=({children})=>{
    const [user, setUser]= useState(null)
    
    const login = async () => {
        try {
            const result= await signInWithPopup(auth, provider)
            setUser(result.user)
        } catch (error) {
            console.error('Error en la autenticacion ', error)
        }
    }
    const logout= async () => {
        try {
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.error('Error al iniciar sesion ', error)
        }
    }
    useEffect(()=>{
        const unsuscribe=auth.onAuthStateChanged((currentUser)=>{
            setUser(currentUser)
        })
        return ()=>unsuscribe()
    },[auth])
    
    return (
        <AuthContext.Provider value={{user, login,logout}}>
        {children}
    </AuthContext.Provider>
)

}
export const useAuth=()=>useContext(AuthContext)