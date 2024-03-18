'use client'
import React, { useContext } from 'react'
import { app } from '@/firebase'
import { getAuth } from 'firebase/auth'
import { AuthContext } from '@/context/AuthContext'
import SignOutButton from './SignOutButton'
import SignInButton from './SignInButton'
import NewPost from './NewPost'
export default function Navbar() {
    const context = useContext(AuthContext)
    if (!context) throw Error('No AuthContext')
    const { isLoggedIn } = context
    return (
        <>
            <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50  shadow-dark-mild dark:bg-neutral-700">
                <div className="flex items-center">
                    <a className="flex items-center lg:mb-0 lg:mt-0" href="/">
                        <h1 className="px-2 py-4 font-semibold font-mono">
                            Blog App
                        </h1>
                    </a>
                    <a className="flex items-center lg:mb-0 lg:mt-0" href="/">
                        <h1 className="px-2 py-4 hover:bg-blue-500 hover:text-white">
                            Home
                        </h1>
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    {
                        // empty middle
                    }
                </div>
                <div className="flex items-center justify-end mr-4 gap-4">
                    {isLoggedIn() ? (
                        <>
                            <NewPost />
                            <SignOutButton />
                        </>
                    ) : (
                        <SignInButton />
                    )}
                </div>
            </nav>
        </>
    )
}
