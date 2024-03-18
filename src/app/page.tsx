import MyEditor from '@/components/editor/MyEditor'
import ReadOnlyEditor from '@/components/editor/ReadOnlyEditor'

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
export default function Home() {
    return (
        <div>
            <h1>home</h1>
            <ReadOnlyEditor value={x} />
        </div>
    )
}
