import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header.js";
import ItemLists from "./Components/Item Lists/ItemLists";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([
    {
      category: "Cakes",
      name: "Chocolate Cake",
      price: 14.99,
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: "Small",
          price: 8.99,
        },
        {
          size: "Med",
          price: 11.99,
        },
        {
          size: "Lg",
          price: 14.99,
        },
      ],
    },
    
    {
      category: "Cakes",
      name: "Vanilla Cake",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: "Small",
          price: 8.99,
        },
        {
          size: "Med",
          price: 11.99,
        },
        {
          size: "Lg",
          price: 14.99,
        },
      ],
    },
    {
      category: "Cakes",
      name: "Chocolate/Vanilla Cake",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: "Small",
          price: 8.99,
        },
        {
          size: "Med",
          price: 11.99,
        },
        {
          size: "Lg",
          price: 14.99,
        },
      ],
    },
    
    {
      category: "CakePops",
      name: "Vanilla Cake Pops",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: 4,
          price: 8.99,
        },
        {
          size: 12,
          price: 11.99,
        },
        {
          size: 20,
          price: 14.99,
        },
      ],
    },
    {
      category: "CakePops",
      name: "Chocolate Cake Pops",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: 4,
          price: 8.99,
        },
        {
          size: 12,
          price: 11.99,
        },
        {
          size: 20,
          price: 14.99,
        },
      ],
    },
    {
      category: "CakePops",
      name: "Birthday Cake Pops",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: 4,
          price: 8.99,
        },
        {
          size: 12,
          price: 11.99,
        },
        {
          size: 20,
          price: 14.99,
        },
      ],
    },
    {
      category: "Cookies",
      name: "Chocolate Chips",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: 4,
          price: 8.99,
        },
        {
          size: 12,
          price: 11.99,
        },
        {
          size: 20,
          price: 14.99,
        },
      ],
    },
    {
      category: "Cookies",
      name: "Chocolate Brownie",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: 4,
          price: 8.99,
        },
        {
          size: 12,
          price: 11.99,
        },
        {
          size: 20,
          price: 14.99,
        },
      ],
    },
    {
      category: "Cookies",
      name: "Snicker Doodle",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: 4,
          price: 8.99,
        },
        {
          size: 12,
          price: 11.99,
        },
        {
          size: 20,
          price: 14.99,
        },
      ],
    },
    {
      category: "Bread",
      name: "Rye",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: "1 - 4 inch Loaf",
          price: 8.99,
        },
        {
          size: "1 - 12 inch Loaf",
          price: 11.99,
        },
        {
          size: `2 - 8 inch Loafs`,
          price: 14.99,
        },
      ],
    },
    {
      category: "Bread",
      name: "Wheat",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: "1 - 4 inch Loaf",
          price: 8.99,
        },
        {
          size: "1 - 12 inch Loaf",
          price: 11.99,
        },
        {
          size: `2 - 8 inch Loafs`,
          price: 14.99,
        },
      ],
    },
    {
      category: "Bread",
      name: "Sourdough",
      description: "smooth, sweet, and just to die for",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      sizeAvail: [
        {
          size: "1 - 4 inch Loaf",
          price: 8.99,
        },
        {
          size: "1 - 12 inch Loaf",
          price: 11.99,
        },
        {
          size: `2 - 8 inch Loafs`,
          price: 14.99,
        },
      ],
    },
    {
      category: "Hot Sauce",
      name: "Fuck YOu",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      description: "Your mouth is going to dance",
      sizeAvail: [
        {
          size: "4oz",
          price: 8.99,
        },
        {
          size: "12oz",
          price: 11.99,
        },
        {
          size: `24oz`,
          price: 14.99,
        },
      ],
    },
    {
      category: "Hot Sauce",
      name: "Fuck You two",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      description: "Your mouth is going to dance",
      sizeAvail: [
        {
          size: "4oz",
          price: 8.99,
        },
        {
          size: "12oz",
          price: 11.99,
        },
        {
          size: `24oz`,
          price: 14.99,
        },
      ],
    },
    {
      category: "Hot Sauce",
      name: "no more fucking",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJ7xOymtpieFRqnjkSAnXC9XL5zluYMputg&usqp=CAU",
      description: "Your mouth is going to dance",
      sizeAvail: [
        {
          size: "4oz",
          price: 8.99,
        },
        {
          size: "12oz",
          price: 11.99,
        },
        {
          size: `24oz`,
          price: 14.99,
        },
      ],
    },
  ]);

  return (
    <>
      <Container fluid className="App">
        <Header products={products} />

        <h1 style={{ textAlign: "center", margin: "55px" }}>Products</h1>
        <ItemLists category="Cakes" products={products} />
        <ItemLists category="CakePops" products={products} />
        <ItemLists category="Bread" products={products} />
        <ItemLists category="Cookies" products={products} />
      </Container>
    </>
  );
}

export default App;
