import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        You do the business <br className="sm:block hidden" />
        we'll handle the money...
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
      With
        the right credit card, you can improve your financial life by building
        credit, earning rewards and saving money. But with hundreds of credit
        cards on the market. 100% Secured We take proactive steps make sure your
        information and transactions are secure. Balance Transfer Get Started A
        balance transfer credit card can save you a lot of money in interest
        charges.
      </p>
      <Button/>
    </div>
  </section>
);

export default Business;
