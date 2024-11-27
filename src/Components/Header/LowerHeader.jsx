import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./Header.module.css";
function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <p>
            <AiOutlineMenu />
            All
          </p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Services</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}
export default LowerHeader;
