import React from "react";
import { categoryInfos } from "./CategoryFullInfos.js";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos?.map((infos, i) => (
        <CategoryCard data={infos} key={i} />
      ))}
    </section>
  );
}
export default Category;
