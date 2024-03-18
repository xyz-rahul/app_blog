'use client'
import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'
import { Button } from './plate-ui/button'

export default function SignOutButton() {
    const context = useContext(AuthContext)
    if (context)
        return (
            <Button onClick={async () => await context.signOut()}>
                logout
            </Button>
        )
    else throw Error('No Auth Context available')
}
