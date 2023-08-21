import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';


function FamilyMeb(props) {
    const {name, about, img} = props;
  return (<>
    <Container className='familyMeb' id={name}>
        <img src={img} alt={name} />
            <h3 className='mb-5'>{name}</h3>
            <p>{about}</p>
              
          </Container >


  </>)
}

export default FamilyMeb