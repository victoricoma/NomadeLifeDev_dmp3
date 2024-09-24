import { db } from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    async function createUser(data) {
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)

            return user
        }catch(error){
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if(error.message.include('Password')){
                systemErrorMessage = "A senha precisa conter ao menos 6 caracteres."
            }else if(error.message.include('email-already')){
                systemErrorMessage = "E-mail já cadastrado em nosso sistema."
            }else{
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const login = async (data) =>{
        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try{
            await signInWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            setLoading(false)
        }catch(error){
            console.error(error.message)
            console.table(typeof error.message)

            let systemErrorMessage

            if(error.message.include('invalid-login-credentials')){
                systemErrorMessage = "Este usuário não tem registro em nossos sistemas"
            }else if(error.message.include('wrong-password')){
                systemErrorMessage = "Existe algum erro em suas credenciais de login"
            }else{
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde."
            }

            setLoading(false)
            setError(systemErrorMessage)
        }
    }

    const logout = ()=>{
        checkIfIsCancelled()
        signOut(auth)
    }

    useEffect(() =>{
        return () => setCancelled(true)
    }, [])

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}