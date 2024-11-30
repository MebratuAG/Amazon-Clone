import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/Product/ProductCard.jsx";
import { productUrl } from "../../Api/endPoints.js";
import axios from "axios";
import Loader from "../../Components/Loader/Loader.jsx";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p> <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
              />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
}
export default Results;
