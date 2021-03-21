import React, { useEffect, useState } from 'react';
import fakeData from '../../FakeData/FakeData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'
import Cards from '../Card/Cards'

const Home = () => {
    const [ride, setRide ] = useState([])
    useEffect(()=>{
       setRide(fakeData)
    },[])
    return (
        <div className="row justify-content-center home-style " >
            {
                ride.map(rd => <Cards card={rd}> </Cards>)
            }
        </div>
    );
};

export default Home;