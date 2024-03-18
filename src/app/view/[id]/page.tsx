import ReadOnlyEditor from '@/components/editor/ReadOnlyEditor'
import { getBlog } from './action'

export default async function page({
    params: { id },
}: {
    params: { id: string }
}) {
    console.log('id', id)
    const x: any = await getBlog(id)
    console.log(x)
    return (
        <form className="py-4 px-8 mt-4">
            <div className="w-full max-w-sm text-3xl font-bold p-2">
                {x.title}
            </div>
            <ReadOnlyEditor value={x.data} />
        </form>
    )
}
