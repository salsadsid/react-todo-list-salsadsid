import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const handleSignIn = () => {
        signInWithGoogle()
    }
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='greeting'>
            <button className='btn btn-dark' onClick={handleSignIn}>Continue with Google</button>
        </div>
    );
};

export default Login;