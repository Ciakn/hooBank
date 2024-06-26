import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] cursor-pointer rounded-full bg-blue-gradient p-[2px]`}>
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] rounded-full h-[100%]`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className={`font-poppins font-medium text-[18px leading-[23px]`}>
          <span className="text-gradient">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrowUp"
          className="h-[23px] w-[23px] object-contain"
        />
      </div>
      <p className={`font-poppins font-medium text-[18px leading-[23px]`}>
        {" "}
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
