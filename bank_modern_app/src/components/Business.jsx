import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}>
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`} />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins text-white font-semibold leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins text-dimWhite font-normal  leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h3 className={`${styles.heading2}`}>
        You do the business <br className="sm:block hidden" />
        we'll handle the money...
      </h3>
      <p className={`${styles.paragraph} max-w-[470px] text-[16px]`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market. 100% Secured We take proactive steps make
        sure your information and transactions are secure. Balance Transfer Get
        Started A balance transfer credit card can save you a lot of money in
        interest charges.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
