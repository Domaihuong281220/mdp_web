/** @format */

import React from "react";

const CardTabs = ({ title, description, image, titleButton, className }) => {
  return (
    <div className={className}>
      <div className="w-[70%] mx-auto pvmax:max-xl:w-[90%] flex flex-col justify-center">
        <p className="text-4xl font-bold text-start py-4">{title}</p>
        <p className="text-lg text-start py-4"> {description}</p>
        <button className="py-2 px-4 rounded-3xl bg-[#4fb645] hover:bg-black cursor-pointer flex w-fit">
          <p className="text-[1rem]  text-white">{titleButton}</p>
        </button>
      </div>
      <div className=" mx-auto flex flex-col justify-center h-fit">
        <img
          className="object-cover  h-[60%] w-[70%] pvmax:max-xl:w-[80%] rounded-[3rem] pvmax:max-xl:h-[80%] mx-auto solution-card-img"
          src={image}
        ></img>
      </div>
    </div>
  );
};

export default CardTabs;
