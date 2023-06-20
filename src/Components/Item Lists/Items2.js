import React, {useState} from 'react'
import { Container, Row } from 'react-bootstrap'


function Items2(props) {
  const [isOpen, setIsOpen] = useState(false);
  const {item} = props


  function handleIsOpenClick() {
    setIsOpen(true);
    
  }

  function handleIsClosedClick() {
    setIsOpen(false)
  }
  console.log(item)
    
  return (
    <Container>
        <Row>
          {!isOpen ?
            <div className='imgDiv' onClick={handleIsOpenClick}>
               <img className='itemimg' src={item.img}  alt={item.name} />
               <p className='itemP'>{item.name}</p>
            </div> : ""}
            {isOpen ? 
              <div className='popUpcontainer'>
                <p onClick={handleIsClosedClick}>X</p>
              </div>: ""
          }
           
        </Row>

    </Container>
  )
}

export default Items2