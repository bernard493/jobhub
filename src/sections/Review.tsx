import React from "react";
import Slider from "react-slick";
import profileImg1 from "../assets/img/pretty-girl-2110243_1920.jpg";
import icon from "../assets/img/icons8-apple-music-lyrics-50.png";
import pic2 from "../assets/img/arms-crossed.jpg";
import { Avatar } from "@material-tailwind/react";
import { ReviewCard } from "../components/ReviewCard/ReviewCard";
import { ReviewInterface } from "../model";


const reviewDetail: ReviewInterface[] = [
  {
    name: "Jennifer",
    review:
      " Lorem ipsum, dolor sit amet consectetur adipisicingamet consectetur adipisicingamet consectetur adipisicingamet consectetur adipisicing elit. Expedita",
    title: "Jobholder",
    profileImg: profileImg1,
  },
  {
    name: "Jhon Deo",
    review:
      " unde, tenetur cumque explicabo, saepeur cumque explicabo, saepeur cumque explicabo, saepeur cumque explicabo, saepeur cumque explicabo, saepe nihil vero laborum odio",
    title: "Jobholder",
    profileImg: pic2,
  },
  
];


export const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="py-[6rem]  space-y-10">
      <div className="">
        <h3 className=" text-gray-800 font-Poppins font-bold text-2xl text-center ">
          What a Job holder says About Us
        </h3>
      </div>
      <div className="flex space-x-5 justify-center">
        {/* <Slider {...settings}> */}
        {
        reviewDetail.map((review) => 
        <ReviewCard {...review}/>
        )
      }

        {/* </Slider> */}
      </div>
    </div>
  );
};
