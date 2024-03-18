import MyEditor from '@/components/editor/MyEditor'
import ReadOnlyEditor from '@/components/editor/ReadOnlyEditor'
import { getBlog } from './actions'
import BlogCard from '@/components/BlogCard'

const x = [
    {
        id: '1',
        type: 'p',
        children: [
            {
                text: 'write something here...',
            },
        ],
    },
    {
        type: 'p',
        children: [
            {
                text: 'heell',
            },
        ],
        id: 'yyb0w',
    },
    {
        type: 'p',
        children: [
            {
                text: 's',
            },
        ],
        id: '81kmo',
    },
    {
        type: 'p',
        children: [
            {
                text: 'sdfsd',
            },
        ],
        id: 'oizmd',
    },
    {
        type: 'p',
        children: [
            {
                text: '',
            },
        ],
        id: 'yhhsn',
    },
]
export default async function Home() {
    // await getBlog()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex justify-center align-middle">
                <BlogCard />
            </div>
            <div className="flex justify-center align-middle">
                <BlogCard />
            </div>
            <div className="flex justify-center align-middle">
                <BlogCard />
            </div>
            <div className="flex justify-center align-middle">
                <BlogCard />
            </div>
            <div className="flex justify-center align-middle">
                <BlogCard />
            </div>
        </div>
    )
}
