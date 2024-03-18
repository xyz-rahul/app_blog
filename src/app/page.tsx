import BlogCard from '@/components/BlogCard'
import {
    collection,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    query,
    startAt,
} from 'firebase/firestore'
import { app } from '@/firebase'
const db = getFirestore(app)

export default async function Home() {
    const documentSnapshots = query(
        collection(db, 'blog'),
        orderBy('timestamp'),
        startAt(0),
        limit(8)
    )
    const blogsSnapshot = await getDocs(documentSnapshots)

    const blogs: any[] = []
    blogsSnapshot.forEach((doc) => {
        blogs.push({ id: doc.id, ...doc.data() }) // Include document ID in the data
    })

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {blogs.map((blog) => (
                <div key={blog.id} className="flex justify-center items-center">
                    <BlogCard
                        id={blog.id}
                        title={blog.title}
                        summary={blog.summary}
                    />
                </div>
            ))}
        </div>
    )
}
