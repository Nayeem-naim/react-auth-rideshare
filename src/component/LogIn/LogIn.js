import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

const LogIn = () => {
    const [user,setUser] = useState({
        email: '',
        password:'',
        name: ''
    })
    if(firebase.apps.length === 0 ) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const handleSignInGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
            }).catch((error) => {
                var errorMessage = error.message;
                var email = error.email;
            });
    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password);
     if(user.email && user.password){
       console.log('submitting');
     }
        e.preventDefault()
    }
    const handleBlur = (e) =>{
        let isFromValid = true;
        if(e.target.name === 'email'){
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6 ;
            const isPasswordNumber = /\d{1}/.test(e.target.value)
            isFromValid = isPasswordValid && isPasswordNumber;
        }
        // if(e.target.name === "name"){
        //     isFromValid = e.target.value
        // }
      if(isFromValid){
          const newUser = {...user};
          newUser[e.target.name] = e.target.value;
          setUser(newUser);

      }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <p>name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <form onSubmit={handleSubmit}>
                <input name="name" onBlur={handleBlur}  type="text" placeholder="Your name"/>
                <br/>
                <input type="text" onBlur={handleBlur} name="email" placeholder='your email'  required/><br />
                <input type="password" onBlur={handleBlur} name="password" placeholder="your password" required /><br />
                <input type="submit" value="submit" /><br /><br />
            </form>
            <button onClick={handleSignInGoogle}>SignInGoogle</button>
        </div>


    );
};

export default LogIn;