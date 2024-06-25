import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:p-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph}  px-2 `}>
          <span className="text-white">20%</span> Discount For {""}
          <span className="text-white ">Month</span> Acount
        </p>
      </div>
      <div className={`flex flex-row justify-between items-center w-full `}>
        <h1
          className={`flex-1 font-poppins font-semibold ss:text-[62px]
           ss:leading-[75px] text-[52px] text-white`}>
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient"> Generation </span>
        </h1>
        <div className={`ss:flex  hidden md:mr-4 mr-0`}>
          <GetStarted />
        </div>
      </div>
      <h1
        className={` w-full font-poppins font-semibold ss:text-[62px]
         ss:leading-[75px] text-[52px] text-white`}>
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        uries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        passages, and more recently with
      </p>
    </div>
    <div className={` flex-1 flex ${styles.flexCenter} md:my-0 m-10`}>
      <img
        src={robot}
        alt="robot"
        className={`w-[100%] h-[100%]  z-[5] relative`}
      />
      <div
        className={`absolute  w-[40%] h-[35%]  top-0 pink__gradient z-[0]`}
      />
      <div
        className={`absolute  w-[80%] h-[80%] rounded-full bottom-40  top-0 white__gradient z-[0]`}
      />
      <div
        className={`absolute  w-[50%] h-[50%]  right-20 bottom-20 blue__gradient z-[0]`}
      />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
);

export default Hero;
