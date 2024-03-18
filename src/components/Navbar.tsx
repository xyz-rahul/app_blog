'use client'
import React, { useContext } from 'react'
import { app } from '@/firebase'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '@/context/AuthContext'
import SignOutButton from './SignOutButton'
import SignInButton from './SignInButton'
export default function Navbar() {
    const context = useContext(AuthContext)
    if (!context) throw Error('No AuthContext')
    const { isLoggedIn } = context
    return (
        <nav className="grid grid-cols-3  bg-blue-300 text-lg font-semibold">
            <div className="flex">
                <a href="/">
                    <h1 className="px-2 py-4 hover:bg-white hover:text-black">
                        Blog App
                    </h1>
                </a>
                <a href="/">
                    <h1 className="px-2 py-4 hover:bg-white hover:text-black">
                        Home
                    </h1>
                </a>
                <a href="/edit">
                    <h1 className="px-2 py-4 hover:bg-white hover:text-black">
                        post
                    </h1>
                </a>
            </div>
            <div className="flex">
                {
                    // empty middle
                }
            </div>
            <div className="flex ml-auto mr-4 my-auto">
                {isLoggedIn() ? <SignOutButton /> : <SignInButton />}
            </div>
        </nav>
    )
}
