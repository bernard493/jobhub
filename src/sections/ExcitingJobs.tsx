import React from "react";

interface CategoryInter {
  tittle: string;
  detail: string;
}

const categoryDetails: CategoryInter[] = [
  { tittle: "UI/UX Design", detail: "100+ Posted New Jobs" },
  { tittle: "Illustration", detail: "250+ Posted New Jobs" },
  { tittle: "Graphics Design", detail: "300+ Posted New Jobs" },
  { tittle: "Web Design", detail: "200+ Posted New Jobs" },
  { tittle: "Product Design", detail: "100+ Posted New Jobs" },
  { tittle: "Web Developer", detail: "100+ Posted New Jobs" },
  { tittle: "Animation", detail: "100+ Posted New Jobs" },
];

const CategoryCard: React.FC<CategoryInter> = (cardDetail) => {
  const { tittle, detail } = cardDetail;
  return (
    <div key={tittle} className="h-[5rem]  bg-white shadow-sm rounded-xl">
      <div className="text-center my-4 space-y-1">
        <h1 className="font-bold font-Poppins text-gray-800 text-sm">{tittle}</h1>
        <p className="text-[0.7rem] text-gray-500">{detail}</p>
      </div>
    </div>
  );
};

export const ExcitingJobs = () => {
  return (
    <div className="pt-[10rem]">
      <div className=" space-y-[4rem]">
        <div className=" flex justify-center ">
          <div className="md:w-[40rem] space-y-7">
            <h3 className=" text-gray-800 font-Poppins font-bold text-3xl text-center ">
              Browse Jobs Category
            </h3>
            <p className="text-center text-[0.8rem] font-Poppins text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              unde, tenetur cumque explicabo, saepe nihil vero laborum odio
              blanditiis dolor provident sapiente accusantium similique corr
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-4 gap-5">
          {categoryDetails.map((card) => (
            <CategoryCard {...card} />
          ))}

          <div className="h-[5rem]  bg-[#403FF2] rounded-xl shadow-sm flex justify-center">
         
              <p className=" font-Poppins text-white text-sm  my-[2rem] ">100+ More Category</p>
           
          </div>
        </div>
      </div>
    
    </div>
  );
};
