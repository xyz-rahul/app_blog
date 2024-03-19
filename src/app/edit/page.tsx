'use client'
import React, { useContext, useState } from 'react'
import { addBlog } from './actions'
import { useRouter } from 'next/navigation'
import MyEditor from '@/components/editor/MyEditor'
import { Button } from '@/components/plate-ui/button'
import { AuthContext } from '@/context/AuthContext'
import { TailSpin } from 'react-loading-icons'

const initialValue = [
    {
        id: '1',
        type: 'p',
        children: [{ text: 'write something here...' }],
    },
]

export default function Edit() {
    const context = useContext(AuthContext)
    const router = useRouter()

    const [state, setState] = useState(initialValue)
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')

    const [submitPending, setSubmitPending] = useState(false)
    async function handleSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setSubmitPending(true)
        const id = await addBlog(title, summary, state)
        console.log('id')
        setSubmitPending(false)
        router.push(`view/${id}`)
    }

    // useEffect(() => {
    //     if (context && !context.user) router.push('/login')
    // }, [context, router])

    if (context && context.user) {
        return (
            <form className="py-4 px-8 mt-4" onSubmit={handleSubmit}>
                <div className="w-full items-center gap-1.5">
                    <input
                        type="text"
                        id="title"
                        placeholder="Title"
                        className="text-3xl w-full font-bold p-2 outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <textarea
                        id="summary"
                        name="summary"
                        rows={4}
                        placeholder="Summary"
                        className="text-2xl p-2 outline-none"
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        required
                    />
                </div>
                <MyEditor state={state} onChange={setState} />
                <div className="flex justify-center m-1">
                    <Button
                        className="min-w-[50%] m-1"
                        type="submit"
                        disabled={submitPending}
                    >
                        {submitPending ? <TailSpin /> : 'Submit'}
                    </Button>
                </div>
            </form>
        )
    } else {
        return <div>loading...</div>
    }
}
