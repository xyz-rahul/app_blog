'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from './plate-ui/button'

export default function SignInButton() {
    const router = useRouter()
    return <Button onClick={() => router.push('/login')}>login</Button>
}
