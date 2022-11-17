import * as firebase from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const app = firebase.initializeApp({ projectId: 'blog-36326' })
export const db = getFirestore(app)
