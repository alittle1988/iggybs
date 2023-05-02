import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header.js';
import Welcome from './Components/Welcome';
import ItemLists from './Components/Item Lists/ItemLists';
import { useState } from 'react';


function App() {

  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([
    {
      category: "Cakes",
      name: "Chocolate Cake",
      price: 14.99,
      description: "smooth, sweet, and just to die for",
      sizeAvail: [{
        size: "sm",
        price: 8.99},
        {
          size: "md",
          price: 11.99
        },
        {
          size: "lg",
          price: 14.99
        }],
    },
      {
        category: "Cakes",
        name: "Vanilla Cake",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: "sm",
          price: 8.99},
          {
            size: "md",
            price: 11.99
          },
          {
            size: "lg",
            price: 14.99
          }],
      },
      {
        category: "Cakes",
        name: "Chocolate and Vanilla Cake",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: "sm",
          price: 8.99},
          {
            size: "md",
            price: 11.99
          },
          {
            size: "lg",
            price: 14.99
          }],
      },
      {
        category: "Cakes Pops",
        name: "Vanilla Cake Pops",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: 4,
          price: 8.99},
          {
            size: 12,
            price: 11.99
          },
          {
            size: 20,
            price: 14.99
          }],
      },
      {
        category: "Cakes Pops",
        name: "Chocolate Cake Pops",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: 4,
          price: 8.99},
          {
            size: 12,
            price: 11.99
          },
          {
            size: 20,
            price: 14.99
          }],
      },
      {
        category: "Cakes Pops",
        name: "Birthday Cake Pops",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: 4,
          price: 8.99},
          {
            size: 12,
            price: 11.99
          },
          {
            size: 20,
            price: 14.99
          }],
      },
      {
        category: "Cookies",
        name: "Chocolate Chips",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: 4,
          price: 8.99},
          {
            size: 12,
            price: 11.99
          },
          {
            size: 20,
            price: 14.99
          }],
      },
      {
        category: "Cookies",
        name: "Chocolate Brownie",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: 4,
          price: 8.99},
          {
            size: 12,
            price: 11.99
          },
          {
            size: 20,
            price: 14.99
          }],
      },
      {
        category: "Cookies",
        name: "Snicker Doodle",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: 4,
          price: 8.99},
          {
            size: 12,
            price: 11.99
          },
          {
            size: 20,
            price: 14.99
          }],
      },
      {
        category: "Bread",
        name: "Rye",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: "1 - 4 inch Loaf",
          price: 8.99},
          {
            size: "1 - 12 inch Loaf",
            price: 11.99
          },
          {
            size: `2 - 8 inch Loafs`,
            price: 14.99
          }],
      },
      {
        category: "Bread",
        name: "Wheat",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: "1 - 4 inch Loaf",
          price: 8.99},
          {
            size: "1 - 12 inch Loaf",
            price: 11.99
          },
          {
            size: `2 - 8 inch Loafs`,
            price: 14.99
          }],
      },
      {
        category: "Bread",
        name: "Sourdough",
        description: "smooth, sweet, and just to die for",
        sizeAvail: [{
          size: "1 - 4 inch Loaf",
          price: 8.99},
          {
            size: "1 - 12 inch Loaf",
            price: 11.99
          },
          {
            size: `2 - 8 inch Loafs`,
            price: 14.99
          }],
      },
      {
        category: "Hot Sauce",
        name: "Fuck YOu",
        description: "Your mouth is going to dance",
        sizeAvail: [{
          size: "4oz",
          price: 8.99},
          {
            size: "12oz",
            price: 11.99
          },
          {
            size: `24oz`,
            price: 14.99
          }],
      },
      {
        category: "Hot Sauce",
        name: "Fuck You two",
        description: "Your mouth is going to dance",
        sizeAvail: [{
          size: "4oz",
          price: 8.99},
          {
            size: "12oz",
            price: 11.99
          },
          {
            size: `24oz`,
            price: 14.99
          }],
      },
      {
        category: "Hot Sauce",
        name: "no more fucking",
        description: "Your mouth is going to dance",
        sizeAvail: [{
          size: "4oz",
          price: 8.99},
          {
            size: "12oz",
            price: 11.99
          },
          {
            size: `24oz`,
            price: 14.99
          }],
      },
      
      

    
  ])




  return (
    <div className="App">
      <Header />
      <Welcome />
      <ItemLists products={products} />
    </div>
  );
}

export default App;
