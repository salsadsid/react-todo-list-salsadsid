import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleSignIn = () => {
        signInWithGoogle()
    }
    return (
        <div className='greeting'>
            <button className='btn btn-dark' onClick={handleSignIn}>sign in with google</button>
        </div>
    );
};

export default Login;