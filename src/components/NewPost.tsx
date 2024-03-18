'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './plate-ui/button'

export default function SignInButton() {
    const router = useRouter()
    return (
        <Button
            className="bg-green-500 hover:bg-green-700"
            onClick={() => router.push('/edit')}
        >
            new post
        </Button>
    )
}
