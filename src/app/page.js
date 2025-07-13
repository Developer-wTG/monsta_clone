"use client";
import Header from "./common-components/HEader";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../public/imgi_35.jpg"
import img2 from "../../public/imgi_36.jpg"
import img3 from "../../public/imgi_3.webp"
import img4 from "../../public/imgi_4.webp"
import img5 from "../../public/imgi_6.jpg"
import Image from "next/image";
import { Container } from "@mui/material";
import { FaHeart } from "react-icons/fa";




export default function Home() {
  return (
    <>
      <Header />
      <SimpleSlider />
      <div className="border-b-1">
        <section className="max-w-[1440px] flex mx-auto py-[3rem] ">
          <div className="overflow-hidden relative w-[31.5%] me-[1.8%] ">
            <Image src={img3} width={null} height={null} alt="" className=" imagecss relative " />
            <span className=" text-[22px] font-normal font-[Rubik, sans-serif] text-[#242424] absolute top-6 left-4.5 text-<base>/(27px) " >Design Creative</span>
            <span className="text-[36px] font-bold font-sans  text-[#242424] absolute  top-14 left-4.5 text-<base>/(27px)">Chair Collection</span>
            <div>



            </div>
          </div>
          <div className="overflow-hidden relative w-[31.5%] me-[1.8%]">
            <Image src={img4} width={null} height={null} alt="" className=" imagecss relative " />
            <div>
              <span className=" text-[22px] font-normal font-[Rubik, sans-serif] text-[#242424] absolute top-6 left-4.5 text-<base>/(27px)" >
                Bestselling Products</span>

              <span className="text-[36px] font-bold font-sans  text-[#242424] absolute top-14 left-4.5 text-<base>/(27px)">Chair Collection</span>
            </div>
          </div>
          <div className="overflow-hidden relative w-[31.5%] me-[1.8%]">
            <Image src={img3} width={null} height={null} alt="" className=" imagecss relative " />
            <div>
              <span className=" text-[22px] font-normal font-[Rubik, sans-serif] text-[#242424] absolute top-6 left-4.5 text-<base>/(27px)" >Onsale Products</span>

              <span className="text-[36px] font-bold font-sans  text-[#242424] absolute top-14 left-4.5 text-<base>/(27px)">Chair Collection</span>
            </div>
          </div>





        </section>

      </div>
      <div className="max-w-[1440px] mx-auto  flex mt-[4rem] mb-[3rem] flex-wrap">
        <aside className="flex mx-auto border w-full">
          <div className="mx-auto">
            <button className="text-[2rem]  border-2 font-serif px-[8px] font-[55] hover:text-[#C0958B] " >Featured</button>
            <button className="text-[2rem]  border-y-2 font-serif px-[8px] font-[55] hover:text-[#C0958B] ">New Arrivals</button>
            <button className="text-[2rem]  border-2 font-serif px-[8px] font-[55] hover:text-[#C0958B]">Onsale</button>
          </div>
        </aside>

        <aside className="my-8 card-section flex flex-col items-center justify-center p-6 shadow-2xl bg-white max-w-[360px] mx-auto font-['Rubik',sans-serif] transition-transform duration-300 hover:scale-105">
          <div className="w-full">
            <Image src={img5} width={0} height={0} alt="Product Image" className=" object-cover w-full h-auto" />
            <p className="text-center py-2 text-[16px] font-semibold text-gray-800">Nest Of Tables</p>
            <p className="text-center border-b font-bold text-[20px] pb-1 text-[#1a1a1a]">Caroline Study Tables</p>
            <div className="text-center flex justify-center items-center gap-4 py-3">
              <span className="line-through text-gray-500 text-[18px]">Rs.3000</span>
              <span className="text-[#C0958B] font-bold text-[20px]">Rs.2500</span>
            </div>
          </div>
          <div className="py-3 flex items-center gap-4 mt-2">
            <FaHeart className="h-[40px] w-[40px] p-2 bg-[#ccc]  hover:bg-red-400 transition" />
            <p className="text-[18px] px-4 py-1 border  bg-[#ccc]] hover:bg-[#C0958B] hover:text-white cursor-pointer transition-all">
              Add To Cart
            </p>
          </div>
        </aside>

      </div>

    </>
  );
}
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div className=" p-0 m-0 ">
      <div className=" overflow-hidden  p-0 m-0   ">
        <Slider {...settings} className="custom-dots-slider  p-0 m-0">
          <div>
            <Image src={img1} width={null} height={null} className=" w-full " />
          </div>
          <div>
            <Image src={img2} width={null} height={null} className="w-full  " />
          </div>

        </Slider>
      </div>
    </div>

  );
}

export { SimpleSlider };






