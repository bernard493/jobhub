import React from "react";
import Slider from "react-slick";
import profileImg1 from "../assets/img/pretty-girl-2110243_1920.jpg";
import icon from "../assets/img/icons8-apple-music-lyrics-50.png";
import pic2 from "../assets/img/arms-crossed.jpg";
import { Avatar } from "@material-tailwind/react";

interface ReviewInterface {
  name: string;
  review: string;
  title: string;
  profileImg: string;
}

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

const ReviewCard: React.FC<ReviewInterface> = (reviewInfo: ReviewInterface) => {
  const { name, review, title, profileImg } = reviewInfo;
  return (
    <div key={name} className="bg-white p-5 space-y-7  rounded-2xl ">
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
};

export const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="pt-[5rem]  space-y-10">
      <div className="">
        <h3 className=" text-gray-800 font-Poppins font-bold text-2xl text-center ">
          What a Job holder says About Us
        </h3>
      </div>
      <div className="py-[5rem} grid grid-row  md:grid-cols-2 gap-7">
        {/* <Slider {...settings}> */}
        {reviewDetail.map((review) => (
          <div
            key={review.name}
            className="bg-white p-5 space-y-7  rounded-2xl "
          >
            <div>
              <p className="text-gray-600 font-Poppins text-sm ">
                {review.review}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <img
                    src={review.profileImg}
                    alt=""
                    className="h-[3rem] w-[3rem]   object-center rounded-xl"
                  />
                </div>
                <div>
                  <p className="text-gray-700 font-Poppins font-bold">
                    {review.name}
                  </p>
                  <p className="text-gray-400 font-Poppins text-[0.8rem] ">
                    {review.title}
                  </p>
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
        ))}

        {/* </Slider> */}
      </div>
    </div>
  );
};
