import React from 'react';
import styles from '../style';
import { robot } from '../assets';

const Main = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col cl:px-0 smpx-16 px-6`}>
      <div className="flex flex-row justify-between
      item-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-gradient
        ss:leading-[100px] leading-[75px]">
          My Personal <br className="sm:block hidden"/> {" "}
          <span className="text-gradient">Portfolio</span>
        </h1>
      </div>
      <p className={`${styles.paragraph} , mt-5
      `}>
        A delve into my personal portfolio, showcasing my skills and a little about me
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md: my-0 my-10 relative`}>
      <img src={robot} alt="billing"
      className="max-w-[650px] w-[100%] h-auto relative z-[5] px-14"/>
      <div className=" absolute bottom-60 z-[0] max-w-[650px] w-[70%] h-[70%] top-0 pink__gradient"/>
      <div className="absolute z-[1] max-w-[650px] w-[100%] h-[100%] bottom-40 rounded-full white__gradient"/>
      <div className="absolute z-[0] max-w-[650px] w-[70%] h-[70%] bottom-20 right-20 blue__gradient"/>
    </div>
  </section>
)

export default Main