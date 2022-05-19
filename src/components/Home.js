import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='greeting'>
            <h1>Greetings...</h1>
            <h4 >Press <Link to='/login' className='login-btn'>Login</Link> to continue</h4>
        </div>
    );
};

export default Home;