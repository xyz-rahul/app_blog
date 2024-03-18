'use client'
import React, { useEffect, useState } from 'react'
import MyEditor from '@/components/editor/MyEditor'
import debounce from 'debounce'
import { Button } from '@/components/plate-ui/button'
import { addBlog } from './actions'
import { useRouter } from 'next/navigation'

const initialValue = [
    {
        id: '1',
        type: 'p',
        children: [{ text: 'write something here...' }],
    },
]

export default function page() {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [state, setState] = useState(() => {
        try {
            const store = localStorage.getItem('editor_item')
            return store ? JSON.parse(store) : initialValue
        } catch (e: any) {
            localStorage.removeItem('editor_item')
            return initialValue
        }
    })

    const set_editor_local_storage = debounce(
        () => localStorage.setItem('editor_item', JSON.stringify(state)),
        2000
    )

    useEffect(() => {
        set_editor_local_storage()
    }, [state])
    async function handleSubmit() {
        const id = await addBlog(title, state)
        router.push(`view/${id}`)
    }
    return (
        <form className="py-4 px-8 mt-4" action={handleSubmit}>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <input
                    type="text"
                    id="title"
                    placeholder="Title"
                    className="text-3xl font-bold p-2 outline-none"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <MyEditor state={state} onChange={setState} />
            <div className="flex justify-center m-1">
                <Button className="min-w-[50%] m-1">submit</Button>
            </div>
        </form>
    )
}
