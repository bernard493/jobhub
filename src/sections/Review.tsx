import React from "react";
import Slider from "react-slick";
import profileImg1 from '../assets/img/pretty-girl-2110243_1920.jpg'

interface ReviewInterface {
  name:string;
  review :string;
  title:string;
  profileImg : string
}



const reviewDetail: ReviewInterface[] = [
  {
    name: 'Jennifer',
    review: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita',
    title : 'Jobholder',
    profileImg : profileImg1
  },
  {
    name: 'Jhon Deo',
    review: ' unde, tenetur cumque explicabo, saepe nihil vero laborum odio',
    title : 'Jobholder',
    profileImg : profileImg1
  },
  {
    name: 'Bernard',
    review: '  blanditiis dolor provident sapiente accusantium similique corr',
    title : 'Frontend Developer',
    profileImg : profileImg1
  }
]


const ReviewCard: React.FC<ReviewInterface> = (reviewInfo:ReviewInterface) =>{
  const {name,review,title,profileImg} = reviewInfo;
  return(
    <div className="bg-white p-5 space-y-5">
      <div>
        <p className="text-gray-600 font-Poppins ">{review}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div>
            <img src={profileImg} alt="" className="h-[3rem] w-[3rem] md:h-[3.5rem]   object-center rounded-xl" />
          </div>
          <div>
            <p className="text-gray-700 font-Poppins font-bold">{name}</p>
            <p className="text-gray-400 font-Poppins ">{title}</p>
          </div>

        </div>
        <div>
          hello
        </div>

      </div>

    </div>
  )
}




export const Review = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-[5rem]">
      <div className="">
        <h3 className=" text-gray-800 font-Poppins font-bold text-2xl text-center ">
          What a Job holder says About Us
        </h3>
      </div>
      <Slider {...settings}>
        {
          reviewDetail.map(review => <ReviewCard {...review}/>)
        }
      </Slider>
    </div>
  );
};
