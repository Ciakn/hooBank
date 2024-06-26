import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6`}>
    {stats.map((stat, value) => (
      <div key={stat.id} className={`flex-1 justify-start flex items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[13git px] xs:leading-[23px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
