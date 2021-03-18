import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{textAlign:"center"}}>
            <nav>
                <ul>

                         <Link to="/home">Home</Link><br/>
                        <Link to="/about">About</Link><br/>
                        <Link to="/login">Login</Link>
            
                </ul>
            </nav>
        </div>
    );
};

export default Home;