import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FamilyMeb from './FamilyMeb';
import chefImg from '../images/chefphoto.jpeg'

function Family() {
  const theChef = {
    name: 'The Chef',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: chefImg
  }
  const theBaker = {
    name: 'The Baker',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/340372206_535560212087960_7245483486945593127_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4ZhQ40dJE5MAX-znCDe&_nc_ht=scontent-lax3-1.xx&oh=00_AfD6bgrA3_-Gpg9ZeE0FerL-yS4DYPvBIOqhRZA2pU0t4g&oe=64EDA59C'
  }
   const theMa = {
    name: 'The Ma',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/17904212_10212761422620366_3715062355613499808_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MCmWPFhbAlAAX9cgFaS&_nc_ht=scontent-lax3-2.xx&oh=00_AfDzU9pq6C7hR1wDUE9fkxfjm7xQHDFvOXfaQp_PaOqa-g&oe=650B3546'
   }
   const theBoy = {
    name: 'The Boy',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/347606983_1282790272667787_3308069885381876906_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=NggWMFgTSIcAX-Qh0wa&_nc_ht=scontent-lax3-1.xx&oh=00_AfDoEJOkkJzqR6PJUsIZYqRG5Pd1SDO1-yc3x1RlwLtYEQ&oe=64EDF23E'
   }
  return (
    <div className='familyContainer'>
        <h1 className='familyTitle pt-5'>The Family</h1>
        <Container className='family'>
          <Row className='familyRow'>
            <Col className='mebCol' md={6}>
          <FamilyMeb name={theChef.name} about={theChef.about} img={theChef.img} />
          </Col>
          <Col className='mebCol' md={6}>
          <FamilyMeb name={theBaker.name} about={theBaker.about} img={theBaker.img} />
          </Col>
          <Col className='mebCol' md={6}>
          <FamilyMeb name={theMa.name} about={theMa.about} img={theMa.img} />
          </Col>
          <Col className='mebCol' md={6}>
          <FamilyMeb name={theBoy.name} about={theBoy.about} img={theBoy.img} />
          </Col>
          </Row>
        </Container>
        
    </div>
  )
}

export default Family