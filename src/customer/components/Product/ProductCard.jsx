import React from "react";
import "./ProductCard.css"

const ProductCard = () => {
  return (
    <div className="productCard w-[15rem] m-3 transition-all cursor-pointer ">
      <div className="h-[20rem]">
        <img className="h-full w-full object-cover object-left-top"
          src="https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70"
          alt=""
        />
      </div> 
      <div className="textPart bg-white p-3">
      <div>
      <p className="font-bold opacity-60">
      SG LEMAN
      </p>
        <p>
        Men Embroidered Jacquard Straight Kurta 
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold">₹199</p>
        <p className="line-through opacity-50">₹19999</p>
        <p className="text-green-600 font-semibold">80% off</p>
 
      </div>

      </div>
    </div>
  );
};

export default ProductCard;
