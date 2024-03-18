import { doc, getDoc } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { app } from '@/firebase'
const db = getFirestore(app)

export async function getBlog(id: string) {
    try {
        const docRef = doc(db, 'users', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            const docData = docSnap.data()
            const { uid, title, data } = docData
            return { uid, title, data }
        } else {
            console.log('No such document!')
        }
    } catch (e: any) {
        console.log(e)
    }
}
