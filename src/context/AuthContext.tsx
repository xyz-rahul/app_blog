'use client'
import {
    getAuth,
    onAuthStateChanged,
    User,
    AuthError,
    signInWithEmailAndPassword as firebase_signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import React, { ReactNode, createContext, useState, useEffect } from 'react'
import { app } from '@/firebase'

const auth = getAuth(app)

type AuthContextType = {
    user: User | null | undefined
    signOut: () => Promise<void>
    signUpWithEmailAndPassword: (
        email: string,
        password: string
    ) => Promise<void>
    signInWithEmailAndPassword: (
        email: string,
        password: string
    ) => Promise<void>
}

export const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextWrapper({
    children,
}: {
    children: ReactNode
}) {
    const [user, setUser] = useState<User | null | undefined>()

    useEffect(() => {
        console.log('use eff user ', user)
    }, [user])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser)
        })

        return () => unsubscribe()
    }, [])

    async function signUpWithEmailAndPassword(email: string, password: string) {
        console.log('sign up', email, password)
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            console.log('cred', userCredential)
            setUser(userCredential.user)
        } catch (error) {
            const errorCode = (error as AuthError).code
            const errorMessage = (error as AuthError).message
        }
    }

    async function signOut() {
        try {
            await signOut()
            setUser(null)
        } catch (error) {
            // Handle error
        }
    }

    async function signInWithEmailAndPassword(email: string, password: string) {
        try {
            await firebase_signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            const errorCode = (error as AuthError).code
            const errorMessage = (error as AuthError).message
            // Handle error
        }
    }

    const authContextValue: AuthContextType = {
        user,
        signOut,
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}