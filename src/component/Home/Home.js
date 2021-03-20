import React, { useEffect, useState } from 'react';
import fakeData from '../../FakeData/FakeData.json'
import './home.css'
import Cards from '../Card/Cards'

const Home = () => {
    const [ride, setRide ] = useState([])
    useEffect(()=>{
       setRide(fakeData)
    },[])
    return (
        <div className="row home-style" >
            {
                ride.map(rd => <Cards card={rd}> </Cards>)
            }
        </div>
    );
};

export default Home;