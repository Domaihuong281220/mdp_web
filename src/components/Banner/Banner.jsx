/** @format */

import React, { useRef, useEffect, useState } from "react";
// import imageBanner from "../../assets/images/banner.png";
// import baasimg from "../../assets/HomePage/baas.mp4";
import BannerImg from "../../assets/mdpcanva3.jpg"
import "./style.css";
const Banner = () => {

  return (
    <div className="w-full h-fit flex items-center content-center justify-center">
  <div className="banner items-center w-[67.37%] pv:max-md:w-[75%] h-fit pt-20 pb-16 pvmax:max-lg:h-fit flex pvmax:max-lg:flex-col pvmax:max-lg:align-middle justify-center">
  
    <div className="flex flex-col w-[50%] items-center h-[21rem] justify-center pvmax:max-lg:w-[100%] pvmax:max-lg:h-[20rem]  pvmax:max-lg:pr-0 pvmax:max-lg:h-[100%] pvmax:max-md:mb-10 banner-fitimg">
      <img src={BannerImg} className="h-full rounded-[1rem] w-fit" />
    </div>

    <div className="flex flex-col w-[50%] h-fit pvmax:max-lg:w-[100%] pvmax:max-lg:h-[100%] gap-12 pvmax:max-lg:gap-10 text-start text-[1.1rem] justify-center items-center justify-items-center ml-[10rem] pvmax:max-lg:ml-0 pvmax:max-lg:px-0 banner-content" >
      <p className="font-bold text-start">
        MDP specializes in providing comprehensive business transformation consulting, 
        system integration, and Banking as a Service (BaaS) solutions tailored to meet the 
        evolving needs of modern businesses.
      </p>
      <p className="text-justify">
        At MDP, we are dedicated to driving transformative change and enabling sustainable 
        growth for businesses across industries. With a deep understanding of the complexities 
        of today's business landscape, we offer expert guidance and innovative solutions in three key areas:
      </p>
    </div>
  </div>
</div>
    
  );
};

export default Banner;
