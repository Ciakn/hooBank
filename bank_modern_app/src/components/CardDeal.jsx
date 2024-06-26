import React from "react";
import { layout } from "../style";
import Button from "./Button";
import styles from "../style";
import { card } from "../assets";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {" "}
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit{" "}
      </p>
      <Button styles={`mt-10`} />
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
