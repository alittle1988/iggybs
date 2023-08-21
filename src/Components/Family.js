import React from 'react';
import { Container, Row } from 'react-bootstrap';
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
    img: 'https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg'
  }
   const theMa = {
    name: 'The Ma',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg'
   }
   const theBoy = {
    name: 'The Boy',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    img: 'https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg'
   }
  return (
    <div className='familyContainer'>
        <h1 className='familyTitle pt-5'>The Family</h1>
        <Container className='family'>
          <Row className='familyRow'>
          <FamilyMeb name={theChef.name} about={theChef.about} img={theChef.img} />
          <FamilyMeb name={theBaker.name} about={theBaker.about} img={theBaker.img} />
          <FamilyMeb name={theMa.name} about={theMa.about} img={theMa.img} />
          <FamilyMeb name={theBoy.name} about={theBoy.about} img={theBoy.img} />
          </Row>
        </Container>
        
    </div>
  )
}

export default Family