import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './LogIn.css'
import { Link } from 'react-router-dom';


const LogIn = () => {
    const  [setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
    const [newUser, setNewUser] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: '',
        name: '',
        error: ''
    })
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleSignInGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((res ) => {
                const {email,password} =  res.user;
                const signInUser = {email,password}
                // res.user;
                setLoggedInUser(signInUser)
                history.replace(from);
            }).catch((error) => {
               
                
            });
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
             const {email,password} =  res.user;
             const signInUser = {email,password}
             const newUserInfo = {...user}
             newUserInfo.error = '';
             newUserInfo.success = true;
             setUser(newUserInfo)
             setLoggedInUser(signInUser)
             history.replace(from);
            })
            .catch( error => {
            const newUserInfo = {...user}
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
            });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                const {email,password} =  res.user;
                const signInUser = {email,password}
              const newUserInfo = {...user}
              newUserInfo.error = '';
              newUserInfo.success = true;
              setUser(newUserInfo)
              setLoggedInUser(signInUser)
             history.replace(from);
            })
            .catch(error =>  {
              const newUserInfo = {...user}
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setUser(newUserInfo);
            });
        }
        e.preventDefault()
    }
    const handleBlur = (e) => {
        let isFromValid = true;
        if (e.target.name === 'email') {
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const isPasswordNumber = /\d{1}/.test(e.target.value)
            isFromValid = isPasswordValid && isPasswordNumber;
        }
        if (isFromValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            {
                <p className="name-style">{user.name}</p>
            }
            <form onSubmit={handleSubmit} className="form-style">
              <h1>{newUser ? 'Create an account' : 'LogIn'}</h1><br/>
               { newUser && <input name="name" onBlur={handleBlur} type="text" placeholder="Your name" />}
                <br /><br />
                <input type="text" onBlur={handleBlur} name="email" placeholder='your email' required /><br /><br />
                <input type="password" onBlur={handleBlur} name="password" placeholder="your password" required /><br /><br />
                <input type="password" onBlur={handleBlur} name="conformPassword" placeholder="your password"/><br /><br />
                <input className="btn-success" type="submit" value={newUser ? 'Create an account' : 'Login'}/><br/><br/>
               <br/><br/>
               <p>{ newUser ? 'Already have an account ?' : 'Don not have an account ?'} <Link onClick={()=> setNewUser(!newUser)}> {newUser ? 'LogIn' : 'Create an account'}</Link> </p>
            </form><br/>
            <hr/>
            <h2>or</h2>
            <button onClick={handleSignInGoogle}>SignInGoogle</button>
            <p style={{color:'red'}}>{user.error}</p>
        </div>
    );
};

export default LogIn;