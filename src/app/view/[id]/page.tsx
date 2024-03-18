import ReadOnlyEditor from '@/components/editor/ReadOnlyEditor'
import { getBlog } from './action'

export default async function page({
    params: { id },
}: {
    params: { id: string }
}) {
    const blog: any = await getBlog(id)
    return (
        <form className="py-4 px-8 mt-4">
            <div className="w-full max-w-sm text-3xl mx-4 font-bold p-2">
                {blog.title}
            </div>
            <div className="w-full max-w-sm text-2xl mx-4 p-2 outline-none">
                {blog.summary}
            </div>
            <ReadOnlyEditor value={blog.data} />
        </form>
    )
}
