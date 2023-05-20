import React from 'react'
import Slider from "react-slick";
import profileImg1 from "../assets/img/pretty-girl-2110243_1920.jpg";
import icon from "../../assets/img/icons8-apple-music-lyrics-50.png";
import pic2 from "../../assets/img/arms-crossed.jpg";
import { Avatar } from "@material-tailwind/react";
import { ReviewInterface } from '../../model';






export const ReviewCard: React.FC<ReviewInterface> = ({ name, review, title, profileImg } : ReviewInterface) => {
    // const { name, review, title, profileImg } = reviewInfo;
    return (
      <div key={name} className="bg-white p-5 space-y-7  rounded-2xl w-[30rem] ">
        <div>
          <p className="text-gray-600 font-Poppins text-sm ">{review}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <Avatar 
                src={profileImg}
                alt=""
                variant="circular"
                // className="h-[3rem] w-[3rem]   object-contain object-top rounded-xl"
              />
            </div>
            <div>
              <p className="text-gray-700 font-Poppins font-bold">{name}</p>
              <p className="text-gray-400 font-Poppins text-[0.8rem] ">{title}</p>
            </div>
          </div>
          <div>
            <img
              src={icon}
              alt=""
              className="h-[3rem] w-[3rem]   object-center rounded-xl"
            />
          </div>
        </div>
      </div>
    );
  
}
