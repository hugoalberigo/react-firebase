import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { authFirebase } from "../services/firebase";

export const checkLogin = () => {
    // const auth = getAuth();
    // const user = auth.currentUser
    const uid = localStorage.getItem('uid')
    // console.log(uid)
    if (uid === "null") {
        console.log("blm login")
        window.location= "/login"
    } else {
        onAuthStateChanged(authFirebase, (user) => {
            if (user) {
                console.log("sdh login")
            } else {
                console.log("blm login")
                window.location= "/login"
            }
        })
    }
}

export const checkLogout = () => {
    // const auth = getAuth();
    // const user = auth.currentUser
    const uid = localStorage.getItem('uid')
    // console.log(uid)
    if (uid === "") {
        console.log("sdh logout")
    } else {
        console.log("blm logout")
        window.location= "/home"
    }
}

export const logOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
        localStorage.setItem('uid', "")
    // Sign-out successful.
    }).catch((error) => {
    // An error happened.
    });
}
