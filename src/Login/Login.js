import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./fireBase.config"
import {UserContext} from "../App"
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
   const { from } = location.state || { from: { pathname: "/" } };
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);   
    }
     const [loggedInUser, setLoggedInUser]= useContext(UserContext)
  const handleGoogleSignIn=() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
       const{displayName, email} = result.user;
       const signedInUser= {name: displayName, email} 
      const user = result.user;
      setLoggedInUser(signedInUser)
      history.replace(from)
  
    })};
    return (
      <div className="d-flex align-items-center justify-content-center">
        <div>
            <button className="btn btn-primary align-middle p-3 bd-highlight col-example mt-5" onClick={handleGoogleSignIn}> Sign in with Google</button>

        </div>
        </div>
    );
};

export default Login;