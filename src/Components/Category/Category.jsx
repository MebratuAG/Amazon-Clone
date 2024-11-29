import React from "react";
import { categoryInfos } from "./CategoryFullInfos.js";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CategoryCard data={infos} key={infos.id} />
      ))}
    </section>
  );
}
export default Category;
