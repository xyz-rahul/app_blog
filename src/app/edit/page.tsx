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
    const [summary, setSummary] = useState('')
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
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <label htmlFor="w3review">Review of W3Schools:</label>

                <textarea
                    id="w3review"
                    name="w3review"
                    rows={4}
                    className="w-full"
                >
                    At w3schools.com you will learn how to make a website. They
                    offer free tutorials in all web development technologies.
                </textarea>
                <input
                    type="text"
                    id="summary"
                    placeholder="summary"
                    className="text-2xl p-2 outline-none"
                    onChange={(e) => setSummary(e.target.value)}
                />
            </div>
            <MyEditor state={state} onChange={setState} />
            <div className="flex justify-center m-1">
                <Button className="min-w-[50%] m-1">submit</Button>
            </div>
        </form>
    )
}
