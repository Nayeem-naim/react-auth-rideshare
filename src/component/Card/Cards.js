import React from 'react';
import { Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Link} from 'react-router-dom';
import './Card.css'
const Cards = (props) => {
    const {name,img } = props.card ;
    return (
        <div className="col-md-3 text-center mt-5 card-style">
             <Card as={Link} to="/destination" className="container  card-style">
              <Card.Img  id="Card-Img" alt="img not found" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cards;