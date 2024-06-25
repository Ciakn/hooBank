import React from "react";
import { stats } from "../constants";
import styles from "../style";
const Stats = () => (
  <section className={`${styles.flexCenter} flex-wrap flex-row sm:mb-20 mb-6`}>
    {stats.map((stat, value) => (
      <div key={stat.id} className={``}>
        <h4 className="font-poppins font-normal xs:text-[20px] text-[15] xs:leading-[26px] leading-[21px] text-gradient">
          {stat.value}
        </h4>
        <p>{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
