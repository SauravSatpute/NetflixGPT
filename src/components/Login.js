import React,{useRef, useState} from 'react'
import Header from './Header'
import { checkValidData, checkValidDateSignUp } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [isSignInForm, setIsSignInForm] = useState(true);
    let [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const userName = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    let handleButtonClick = () => {
       let message = "";
       if(isSignInForm){
        message = checkValidData(email.current.value, password.current.value);
       }
       else{
        message = checkValidDateSignUp(email.current.value, password.current.value,userName.current.value);
       }
        setErrorMessage(message);
       if(message) return;

       //Sign In / Sign Up Logic
       if(!isSignInForm) {
        //Sign Up Logic

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
            const user = userCredential.user;
            updateProfile(user , {
                displayName: userName.current.value, photoURL: "https://avatars.githubusercontent.com/u/66636762?v=4"
              }).then(() => {
                // Profile updated!
                // ...
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(
                    addUser({
                        uid:uid,
                        email:email,
                        displayName:displayName,
                        photoURL:photoURL
                    })
                )
                navigate("/browse");
              }).catch((error) => {
                // An error occurred
                // ...
                setErrorMessage(error.message); 
              });
            console.log(user);
            
                // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
                // ..
            console.log(errorCode + " " + errorMessage);
            });
       
        }
       else {
        //Sign In Logic

        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
             // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
            });


       }
        //console.log(message);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img 
             src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
             alt="logo" 
             />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-3/12  absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm  && <input ref={userName} type="text" placeholder='Full Name' className=' p-4 my-4 w-full bg-gray-700' />}
            <input ref={email} type="text" placeholder='Email Address' className=' p-4 my-4 w-full bg-gray-700' />
            <input ref={password} type="password" placeholder='Password' className=' p-4 my-4 w-full bg-gray-700' />
            <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
            <button className='p-4  my-6 bg-red-700 w-full rounded-lg'onClick={handleButtonClick} >{isSignInForm? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm} >{isSignInForm? "New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login