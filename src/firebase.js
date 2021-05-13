import firebase from 'firebase'

const config = {
apiKey: "AIzaSyAVUXt93LVrzZuV-kI4MFqxf7ldmGPl3_Q",
  authDomain: "taskstodolist-5eb01.firebaseapp.com",
  databaseURL: "https://taskstodolist-5eb01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "taskstodolist-5eb01",
  storageBucket: "taskstodolist-5eb01.appspot.com",
  messagingSenderId: "947885205618",
  appId: "1:947885205618:web:a035dee4c223b1d97cbaeb",
  measurementId: "G-L1LZZ48CRG"
}
 
firebase.initializeApp(config)

export default firebase
  
export const database = firebase.database()