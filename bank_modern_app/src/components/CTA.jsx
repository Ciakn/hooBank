import React from "react";
import Button from "./Button";
import styles from "../style";
const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow}`}>
    <div>
      <h2 className={`${styles.heading2}`}> Lets try our service Now! </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        everything you need to acsept card payments and grow your business
        anywhere on the planet
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
