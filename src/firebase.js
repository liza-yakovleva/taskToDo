import firebase from 'firebase/app'
import 'firebase/firebase-database'
import 'firebase/firebase-auth'

const config = {
  apiKey: "AIzaSyAac5ugk8ldTQP0JzBChmgUprM9pLlhZs8",
  authDomain: "tasktodo-1b417.firebaseapp.com",
  databaseURL: "https://tasktodo-1b417-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tasktodo-1b417",
  storageBucket: "tasktodo-1b417.appspot.com",
  messagingSenderId: "457021017974",
  appId: "1:457021017974:web:4f85290b0d8bb330eab457"
}
 
firebase.initializeApp(config)

export default firebase
  
export const database = firebase.database()