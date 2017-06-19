import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "YOUR",
    authDomain: "YOUR",
    databaseURL: "YOUR",
    projectId: "YOUR",
    storageBucket: "",
    messagingSenderId: "YOUR"
})

const db = database(app)

export default Rebase.createClass(db)