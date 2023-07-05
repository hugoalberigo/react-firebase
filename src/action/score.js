import { getDoc, doc, updateDoc } from "firebase/firestore"
import { database } from "../services/firebase"

export function addScore(users) {
    const uid = localStorage.getItem('uid')
    getDoc(doc(database, users, uid))
    .then
    (docSnap => {
        if(docSnap.exists()) {
            var winScore = docSnap.data().score + 1
            updateDoc(doc(database, "users", uid), {
                score: winScore
            })

          } else {
            console.log("No such document!");
          }
    })

}

