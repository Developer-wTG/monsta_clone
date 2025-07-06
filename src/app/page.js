"use client";
import Header from "./common-components/HEader";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../public/imgi_35.jpg"
import img2 from "../../public/imgi_36.jpg"
import img3 from "../../public/imgi_3.webp"
import img4 from "../../public/imgi_4.webp"
import Image from "next/image";




export default function Home() {
  return (
    <>
    <Header/>
    <Responsive/>
    <div className="border-b-1">
      <section className="max-w-[1440px] flex mx-auto py-5 ">
        <div className="overflow-hidden relative w-[31.5%] me-[1.8%]">
           <Image src={img3} width={null} height={null} alt="" className=" imagecss  "/>
        </div>
         <div className="overflow-hidden relative w-[31.5%] me-[1.8%]">
           <Image src={img4} width={null} height={null} alt="" className=" imagecss "/>
         </div>
          <div className="overflow-hidden relative w-[31.5%] me-[1.8%]">
            <Image src={img3} width={null} height={null} alt="" className=" imagecss "/>
          </div>
       
       
       
        

      </section>

    </div>

    </>
  );
}
function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="custom-dots-slider">
        <div>
          <Image src={img1} width={null} height={null}/>
        </div>
        <div>
          <Image src={img2} width={null} height={null}/>
        </div>
        
      </Slider>
    </div>
  );
}

export  {Responsive};
