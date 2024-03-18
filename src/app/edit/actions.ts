import { Timestamp, getFirestore } from 'firebase/firestore'
import { app } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'
const db = getFirestore(app)

import { getAuth } from 'firebase/auth'

export async function addBlog(title: string, summary: string, data: any) {
    try {
        const auth = getAuth(app)
        const user = auth.currentUser

        if (user) {
            const uid = user.uid
            const docRef = await addDoc(collection(db, 'blog'), {
                title: title,
                summary: summary,
                data: data,
                uid: uid,
                timestamp: Timestamp.now(),
            })
            return docRef.id
        } else {
            throw new Error('no user found')
        }
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}
