import React from "react";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import { useLanguage } from "../contexts/LanguageContext";

const Partners = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center w-full my-10">
      {language === "ja" ? (
        <p className="text-center txt-col text-4xl sm:text-5xl mt-16 font-bold border-b-[6px] border-[#7B3FE4]">
          パートナー
        </p>
      ) : (
        <p className="text-center txt-col text-4xl sm:text-5xl mt-16 font-bold border-b-[6px] border-[#7B3FE4]">
          Partners
        </p>
      )}
      <div className="flex justify-center items-center py-20 lg:w-1/2">
        <img className="mx-2 mt-3" src={img5} alt="logo" />
      </div>
      {language === "ja" ? (
        <p className="text-center txt-col text-2xl sm:text-4xl mt-16 font-bold border-b-[6px] border-[#7B3FE4]">
          コミュニティパートナー
        </p>
      ) : (
        <p className="text-center txt-col text-3xl sm:text-4xl mt-16 font-bold border-b-[6px] border-[#7B3FE4]">
          Community Partners
        </p>
      )}

      <div className="flex justify-center py-20 ">
        <img className="sm:h-12 h-10 mx-2 sm:mt-3 mt-8" src={img6} alt="logo" />
      </div>
    </div>
  );
};

export default Partners;
