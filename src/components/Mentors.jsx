import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import pfp1 from "../assets/pfp1.png";
import pfp2 from "../assets/pfp2.png";
import pfp3 from "../assets/pfp3.png";
import pfp4 from "../assets/pfp4.png";

const data = [
  {
    image: pfp1,
  },
  {
    image: pfp2,
  },
  {
    image: pfp3,
  },
  {
    image: pfp4,
  },
  {
    image: pfp3,
  },
  {
    image: pfp4,
  },
];

const Mentors = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center w-full my-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {language === "ja" ? (
        <p className="text-center txt-col text-5xl font-bold border-b-[6px] border-[#7B3FE4]">
          メンター
        </p>
      ) : (
        <p className="text-center txt-col text-5xl font-bold border-b-[6px] border-[#7B3FE4]">
          Mentors
        </p>
      )}

      <div className="grid gap-6 row-gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-20">
        {data.map((item, i) => (
          <div key={i} className="transition duration-500 mx-4 my-4">
            <img className="w-full h-auto" src={item.image} alt="" />
          </div>
        ))}
      </div>
      <div className="flex justify-center my-12">
        <a href="#" className="btn1 w-40 ml-4 block h-14 font-medium">
          {/* Show More */}
        </a>
      </div>
    </div>
  );
};

export default Mentors;
