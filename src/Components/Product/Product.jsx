import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import classes from "./Product.module.css";

function Product() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res)
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products &&
            products?.map((singleProduct) => {
              return (
                <ProductCard
                  renderAdd={true}
                  product={singleProduct}
                  key={singleProduct.id}
                />
              );
            })}
        </section>
      )}
    </>
  );
}

export default Product;
