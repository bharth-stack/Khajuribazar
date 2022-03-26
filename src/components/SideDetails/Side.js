import React from "react";
import classes from "./Side.module.css";
import Slide from "../Coursel/Slider.js";

export default function Side() {
  return (
    <div className={classes.side_component}>
      <div className={classes.side_details}>
        <div className={classes.side_heading}>
          <h4>Join The Community</h4>
          <p>
            Your Ultimate <span>Personal Bookstore</span>
          </p>
        </div>
        <div className={classes.side_scroll}>
          <Slide></Slide>
        </div>
      </div>
    </div>
  );
}
