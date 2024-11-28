import Header from "./Components/Header/Header.jsx";
import "./App.css";
import Carousel from "./Components/Carousel/Carousel.jsx";
import Category from "./Components/Category/Category.jsx";
import Product from "./Components/Product/Product.jsx";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </div>
  );
}

export default App;
