import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyChNM_oR53KHFniahMot64vrnjVvIIuwHc",
  authDomain: "nomadelife-vsi.firebaseapp.com",
  projectId: "nomadelife-vsi",
  storageBucket: "nomadelife-vsi.appspot.com",
  messagingSenderId: "146063288386",
  appId: "1:146063288386:web:b2654d95ef6f59223ae5db",
  measurementId: "G-GYKRFVEXK5"
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}