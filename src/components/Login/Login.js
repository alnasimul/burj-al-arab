import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext}  from '../../App';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
        .then(res => {
                const {displayName,email, photoURL} = res.user;

                const signedInUser = {
                    name: displayName,
                    email,
                    photoURL
                }
                console.log(signedInUser);
                setLoggedInUser(signedInUser);
                console.log(loggedInUser);
        }).catch(err => {

        })
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        </div>
    );
};

export default Login;