import React from 'react'
import { Container, Row } from 'react-bootstrap'

function Items2(props) {
    const {item} = props
  return (
    <Container>
        <Row>
            <div className='imgDiv'>
               <img className='itemimg' src={item.img}  alt={item.name} />
               <p className='itemP'>{item.name}</p>
            </div>
           
        </Row>

    </Container>
  )
}

export default Items2