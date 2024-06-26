import React from "react";
import styles from "../style";
import { feedback } from "../constants";
import { quotes } from "../assets";

const testomonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
   
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${styles.heading2}`}>
        What people are <br className="sm:block hidden" /> saying about us...
      </h1>
      <div className={`w-full md:mt-0 mt-6`}>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          {" "}
          everything you need to acsept card payments and grow your business
          anywhere on the planet{" "}
        </p>
      </div>
    </div>
    <div
      className={`flex flex-wrap flex-row sm:justify-start justify-center w-full feedback-container`}>
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);
export const FeedbackCard = ({ content, name, title, img }) => (
  <div
    className={`flex justify-between max-w-[370px]  flex-col px-10 py-12 rounded-[20px] box-shadow feedback-card cursor-pointer`}>
    <img src={ quotes} alt="quotes" className="w-[42px] h-[27px] object-contain" />
    <h4 className="font-poppins font-normal text-[20px] leading-[32px] text-white my-10">
      {content}
    </h4>
    <div className="flex flex-row">
      <img
        src={img}
        alt="feedback"
        className="w-[48px] h-[48px] object-contain"
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-normal text-[20px] leading-[32px] text-white">
          {" "}
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);
export default testomonials;
