'use client'
import { AuthContext } from '@/context/AuthContext'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function SignUpPage() {
    const authContext = useContext(AuthContext)

    if (!authContext) {
        throw new Error('AuthContext is not available.') // Throw an error if AuthContext is not found
    }
    const router = useRouter()

    // useEffect(() => {
    //     if (authContext.isLoggedIn()) router.push('/')
    // }, [authContext])

    const { signUpWithEmailAndPassword } = authContext
    const [response, setResponse] = useState<{
        email: string
        password: string
    }>({ email: '', password: '' })
    async function submitForm() {
        const { email, password } = response
        await signUpWithEmailAndPassword(email, password)
    }
    return (
        <>
            <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
                    <div className="max-w-md text-center">
                        <img src="/signup.svg" alt="singup-photo" />
                    </div>
                </div>

                <div className="w-full bg-gray-100 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">
                            Sign Up
                        </h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                            Join to Our Community with all time access and free{' '}
                        </h1>
                        <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
                            <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
                                <button
                                    type="button"
                                    className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                                >
                                    <img
                                        src="/google_icon.svg"
                                        alt="google-icon"
                                        className="h-4 w-4"
                                    />
                                    Sign Up with Google{' '}
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>or with email</p>
                        </div>
                        <form action={submitForm} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
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
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
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
                                <button
                                    type="submit"
                                    className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>
                                Already have an account?
                                <a
                                    href="/login"
                                    className="text-black hover:underline"
                                >
                                    Login here
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
