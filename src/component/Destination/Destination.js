import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import './Destination.css'
import fakeData from '../../FakeData/FakeData.json'
<link href='https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css' rel='stylesheet' />


const Destination = () => {
  const [img ,setImg] = useState([])
  useEffect(()=>{
     setImg(fakeData)
  },[])
  
 const map = ()=>{
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

    mapboxgl.accessToken = 'pk.eyJ1IjoibmF5ZWVtOTUiLCJhIjoiY2ttaGt5bDQ1MDhlcTJ2a2Q4ajZ2eGhnbSJ9.npTlQC13WpFhurIhM6USww';
    var map = new mapboxgl.Map({
      container: 'map-id',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
    
 }
    return (
        <div className="container"  style={{ textAlign: "center" }}>

            <Row >
                <Col xs={6} md={4} className="colum-style">
                    <h4>Pik From</h4>
                    <input type="text"/><br/><br/>
                    <h4>Pik to</h4>
                    <input type="text"/><br/><br/>
                    <input type="datetime" name="datetime" id="" placeholder="date and time "/><br/><br/>
                    <input id="button" type="button" value="search"/>

                    <img src={img} alt=""/>
               </Col>
                <Col  xs={12} md={8} id='map-id'>
                  <button onClick={map}>Click for map</button>
                </Col>
            </Row>

        </div>
    );
};

export default Destination;