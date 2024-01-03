import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultipleItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <div className=" py-16 px-10">
      <h1 className="text-[36px] font-600 font-poppins mb-16">
        WHAT ARE THEY SAYING
      </h1>
      <Slider {...settings}>
        <div className=" w-4/6 h-60 px-14 mb-8">
          <div className="border-2 border-gray-200 px-14 py-10 mt-4 rounded-lg">
            <h1 className="font-raleway text-[18px] font-bold">
              Hafizullah Rasa
            </h1>
            <p className="text-[14px] font-sans text-[#999999] pb-3">
              Ceo and Founder
            </p>
            <span className="text-[16px] font-sans text-[#444444] italic">
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur esse quaerat explicabo quo iure voluptas dolorem
              fugit, ipsam accusamus modi.
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            </span>
          </div>
        </div>
        <div className=" w-4/6 h-60 px-14 mb-8">
          <div className="border-2 border-gray-200 px-14 py-10 mt-4 rounded-lg">
            <h1 className="font-raleway text-[18px] font-bold">
              Mohammad Asif
            </h1>
            <p className="text-[14px] font-sans text-[#999999] pb-3">
              WHO Cordinator
            </p>
            <span className="text-[16px] font-sans text-[#444444] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur esse quaerat explicabo quo iure voluptas dolorem
              fugit, ipsam accusamus modi.
            </span>
          </div>
        </div>
        <div className=" w-4/6 h-60 px-14 mb-8">
          <div className="border-2 border-gray-200 px-14 py-10 mt-4 rounded-lg">
            <h1 className="font-raleway text-[18px] font-bold">Reza Merzai</h1>
            <p className="text-[14px] font-sans text-[#999999] pb-3">
              Pubg Player Pro
            </p>
            <span className="text-[16px] font-sans text-[#444444] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur esse quaerat explicabo quo iure voluptas dolorem
              fugit, ipsam accusamus modi.
            </span>
          </div>
        </div>
        <div className=" w-4/6 h-60 px-14 mb-8">
          <div className="border-2 border-gray-200 px-14 py-10 mt-4 rounded-lg">
            <h1 className="font-raleway text-[18px] font-bold">
              Mohammad Anwar
            </h1>
            <p className="text-[14px] font-sans text-[#999999] pb-3">
              Visa Registration Specialist
            </p>
            <span className="text-[16px] font-sans text-[#444444] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur esse quaerat explicabo quo iure voluptas dolorem
              fugit, ipsam accusamus modi.
            </span>
          </div>
        </div>
        <div className=" w-4/6 h-60 px-14 mb-8">
          <div className="border-2 border-gray-200 px-14 py-10 mt-4 rounded-lg">
            <h1 className="font-raleway text-[18px] font-bold">
              Mohammad Zahir
            </h1>
            <p className="text-[14px] font-sans text-[#999999] pb-3">
              Dari Poet
            </p>
            <span className="text-[16px] font-sans text-[#444444] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur esse quaerat explicabo quo iure voluptas dolorem
              fugit, ipsam accusamus modi.
            </span>
          </div>
        </div>
        <div className=" w-4/6 h-60 px-14 mb-8">
          <div className="border-2 border-gray-200 px-14 py-10 mt-4 rounded-lg">
            <h1 className="font-raleway text-[18px] font-bold">
              Khan Mohammad
            </h1>
            <p className="text-[14px] font-sans text-[#999999] pb-3">
              Professor
            </p>
            <span className="text-[16px] font-sans text-[#444444] italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur esse quaerat explicabo quo iure voluptas dolorem
              fugit, ipsam accusamus modi.
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MultipleItems;
