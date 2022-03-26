import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";
import Cust_1 from "../assets/customer-1.jpg";
import Cust_2 from "../assets/customer-2.jpg";
import Cust_3 from "../assets/customer-3.jpg";
import Cust_4 from "../assets/customer-4.jpg";
import Cust_5 from "../assets/customer-5.jpg";
import Cust_6 from "../assets/customer-6.jpg";
import classes from "../SideDetails/Side.module.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function slide() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#202536" }}>
        Example to setup your carousel in react
      </h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div className={classes.side_scroll}>
              <img className={classes.cust_images} src={Cust_1}></img>
              <h5>Abhay Rai</h5>
              <h2>Khajuribazar helped me get the study materials Easily!</h2>
            </div>
          </Item>
          <Item>
            <div className={classes.side_scroll}>
              <img className={classes.cust_images} src={Cust_2}></img>
              <h5>Aaron</h5>
              <h2>Khajuribazar helped me get the study materials Easily!</h2>
            </div>
          </Item>
          <Item>
            <div className={classes.side_scroll}>
              <img className={classes.cust_images} src={Cust_3}></img>
              <h5> Antonio</h5>
              <h2>Khajuribazar helped me get the study materials Easily!</h2>
            </div>
          </Item>
          <Item>
            <div className={classes.side_scroll}>
              <img className={classes.cust_images} src={Cust_4}></img>
              <h5>Brayden</h5>
              <h2>Khajuribazar helped me get the study materials Easily!</h2>
            </div>
          </Item>
          <Item>
            <div className={classes.side_scroll}>
              <img className={classes.cust_images} src={Cust_5}></img>
              <h5>Abhay Rai</h5>
              <h2>Khajuribazar helped me get the study materials Easily!</h2>
            </div>
          </Item>
          <Item>
            <div className={classes.side_scroll}>
              <img className={classes.cust_images} src={Cust_6}></img>
              <h5>Coinneach</h5>
              <h2>Khajuribazar helped me get the study materials Easily!</h2>
            </div>
          </Item>
        </Carousel>
      </div>
    </div>
  );
}
export default slide;
