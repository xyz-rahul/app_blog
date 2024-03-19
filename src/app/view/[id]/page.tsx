import ReadOnlyEditor from '@/components/editor/ReadOnlyEditor'
import { getBlog } from './action'

export default async function page({
    params: { id },
}: {
    params: { id: string }
}) {
    const blog: any = await getBlog(id)
    return (
        <article className="max-w-4xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
            <div className="w-full mx-auto space-y-4">
                <h1 className="text-5xl font-bold leading-none">
                    {blog.title}
                </h1>
                <div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="p-1 hover:underline"
                    >
                        #MambaUI
                    </a>
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="p-1 hover:underline"
                    >
                        #TailwindCSS
                    </a>
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="p-1 hover:underline"
                    >
                        #Angular
                    </a>
                </div>
                <p className="text-sm dark:text-gray-400">
                    by
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline dark:text-violet-400"
                    >
                        <span>Leroy Jenkins</span>
                    </a>
                    on
                    <span>Feb 12th 2021</span>
                </p>
            </div>

            <div className="dark:text-gray-100 text-sm">
                <h4 className="font-bold text-lg">Summary</h4>
                <p>{blog.summary}</p>
            </div>
            <ReadOnlyEditor value={blog.data} />
        </article>
    )
}
