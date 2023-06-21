import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header.js";
import ItemLists from "./Components/Item Lists/ItemLists";
import { useState } from "react";
import DetailsPopUp from "./Components/Item Lists/DetailsPopUp";

function App() {
  const [products, setProducts] = useState([
    {
      category: "Cakes",
      name: "Chocolate Cake",
      price: 14.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2019-08/jewish-rye.jpg?itok=8XgYYHcA",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/11/0/HE_whole-wheat-bread_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371609761646.jpeg",
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
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      img: "https://www.homemadefoodjunkie.com/wp-content/uploads/2017/11/IMG_1354-1024x683.jpg.webp",
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
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState({});

  const handleShowDetails = (detail) => {
    console.log(detail);
    if (showDetails) {
      setShowDetails(false);
    } else {
      setDetails(detail);
      setShowDetails(true);
    }
  };

  return (
    <>
      <Container fluid className="App">
        <Header products={products} />

        <h1 style={{ textAlign: "center", margin: "55px" }}>Products</h1>
        {showDetails ? (
          <DetailsPopUp
            details={details}
            onHandleShowDetails={handleShowDetails}
          />
        ) : (
          ""
        )}
        <ItemLists
          showDetails={showDetails}
          onHandleShowDetails={handleShowDetails}
          category="Cakes"
          products={products}
        />
        <ItemLists
          showDetails={showDetails}
          onHandleShowDetails={handleShowDetails}
          category="CakePops"
          products={products}
        />
        <ItemLists
          showDetails={showDetails}
          onHandleShowDetails={handleShowDetails}
          category="Bread"
          products={products}
        />
        <ItemLists
          showDetails={showDetails}
          onHandleShowDetails={handleShowDetails}
          category="Cookies"
          products={products}
        />
      </Container>
    </>
  );
}

export default App;
