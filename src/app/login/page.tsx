'use client'
import { AuthContext } from '@/context/AuthContext'
import React, { useContext, useEffect, useState } from 'react'

export default function LoginPage() {
    const authContext = useContext(AuthContext)

    if (!authContext) {
        throw new Error('AuthContext is not available.') // Throw an error if AuthContext is not found
    }

    const { signInWithEmailAndPassword } = authContext

    const [response, setResponse] = useState<{
        email: string
        password: string
    }>({ email: '', password: '' })
    async function submitForm() {
        const { email, password } = response
        // if (!email || email.length === 0 || !password || password.length === 0)
        //     throw new Error('email or password is not provided')
        console.log('login page', email, password)
        await signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <h1>login</h1>
            <form action={submitForm}>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) =>
                            setResponse((prev) => {
                                return {
                                    ...prev,
                                    email: e.target.value,
                                }
                            })
                        }
                    />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        onChange={(e) =>
                            setResponse((prev) => {
                                return {
                                    ...prev,
                                    password: e.target.value,
                                }
                            })
                        }
                    />
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}
