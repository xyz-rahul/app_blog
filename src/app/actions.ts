import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'
import { app } from '@/firebase'
const db = getFirestore(app)

export async function getBlog() {
    const querySnapshot = await getDocs(collection(db, 'users'))
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data())
    })
}
