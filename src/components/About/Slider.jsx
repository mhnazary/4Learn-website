import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";

const information = [
  {
    name: "Hafizullah",
    job: "Ceo and Founder",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur esse quaerat explicabo quo iure voluptas dolorem fugit, ipsam accusamus modi.",
  },
  {
    name: "Mohammad Asif",
    job: "WHO Conrdinator",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur esse quaerat explicabo quo iure voluptas dolorem fugit, ipsam accusamus modi.",
  },
  {
    name: "Reza",
    job: "Pubg Pro player",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur esse quaerat explicabo quo iure voluptas dolorem fugit, ipsam accusamus modi.",
  },
  {
    name: "Mohammad anwar",
    job: "Visa registration Especialist",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur esse quaerat explicabo quo iure voluptas dolorem fugit, ipsam accusamus modi.",
  },
  {
    name: "Mohammad Zahir",
    job: "Dari poet",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur esse quaerat explicabo quo iure voluptas dolorem fugit, ipsam accusamus modi.",
  },
  {
    name: "Khan Mohammad",
    job: "Professor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur esse quaerat explicabo quo iure voluptas dolorem fugit, ipsam accusamus modi.",
  },
];
const MultipleItems = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    customPaging: (i) => {
      const dotClassName = i === currentSlide ? "dot active" : "dot";
      return <div className={dotClassName} />;
    },
  };

  return (
    <div className=" py-16 px-10">
      <div className="flex justify-start items-center">
        <h2 className="text-[14px] font-raleway font-bold text-[#aaaaaa] tracking-widest">
          TESTIMONIALS
        </h2>
        <hr className="w-32 ml-4 border-1 border-green" />
      </div>
      <h1 className="text-[36px] font-600 font-poppins mb-16">
        WHAT ARE THEY SAYING
      </h1>
      <Slider {...settings} afterChange={handleSlideChange}>
        {information.map((info) => (
          <div>
            {" "}
            <SliderCard Information={info} />{" "}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItems;
