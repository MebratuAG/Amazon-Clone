import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import LowerHeader from "./LowerHeader";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {
  const [{ basket }, dispatch] = useContext(DataContext);
  // console.log(basket.length);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          {/* {logo} */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
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
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </Link>
            <Link to="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* <Link to={"/cart"}> */}
            <Link to="/cart" className={classes.cart}>
              <FaShoppingCart size={35} />
              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};
export default Header;
