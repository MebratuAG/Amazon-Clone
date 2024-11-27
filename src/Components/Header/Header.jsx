import React from "react";
import classes from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* {logo} */}
          <div className={classes.logo__container}>
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </a>
            {/* {delivery} */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* {search} */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Product" />
            <FaSearch size={25} />
          </div>
          {/* right side link */}
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            {/* <a to={"/cart"}> */}
            <a href="" className={classes.cart}>
              <FaShoppingCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}
export default Header;
