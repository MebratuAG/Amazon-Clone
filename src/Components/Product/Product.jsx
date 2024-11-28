import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
function Product() {
  const [products, setProducts] = useState([]); // Initialize with an empty array

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data); // Set products data from API response
      })
      .catch((err) => {
        console.error(err); // Log error to the console
      });
  }, []);

  return (
    <section className={classes.products_container}>
      {products.map((singleProduct) => (
        <ProductCard product={singleProduct} key={singleProduct.id} />
      ))}
    </section>
  );
}

export default Product;
