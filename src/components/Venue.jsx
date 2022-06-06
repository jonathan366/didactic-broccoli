import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";
import txt from "../assets/txt.png";

const Venue = () => {
  const { language } = useLanguage();
  return (
    <div>
      <div className="py-16 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-wrap justify-evenly">
          <img className="w-72 h-[550px] " src={v1} alt="" />
          <div className="flex flex-col">
            <div className="sm:p-7 my-14 lg:my-0 flex flex-col items-center lg:items-start">
              {language === "ja" ? (
                <>
                  <img className="w-80 h-10 mt-7" src={txt} alt="" />
                  <p className="txt-col text-center lg:text-left text-lg py-4">
                    〒150-0001 東京都渋谷区神宮前６丁目１２−18, The Iceberg, 1F
                  </p>
                  <a
                    href="https://goo.gl/maps/53TNV9shKiGXgXxt5"
                    target="_blank"
                    className="txt-col text-lg pt-3 btn3 effect-underline"
                  >
                    方向 <span className="text-[#7B3FE4] font-bold">→</span>
                  </a>
                </>
              ) : (
                <>
                  <img className="w-80 h-10" src={txt} alt="" />
                  <p className="txt-col text-center lg:text-left text-lg py-4">
                    6-12-8 Jingumae Shibuya-ku Tokyo 150-0001, Four minute walk
                    from <br className="lg:block hidden" />
                    Meiji-jingumae Station
                  </p>
                  <a
                    href="https://goo.gl/maps/53TNV9shKiGXgXxt5"
                    target="_blank"
                    className="txt-col text-lg pt-3 btn3 effect-underline"
                  >
                    Directions{" "}
                    <span className="text-[#7B3FE4] font-bold">→</span>
                  </a>
                </>
              )}
            </div>
            <div className="flex flex-wrap lg:justify-start justify-center w-full">
              <img className="mt-6 mx-4" src={v2} alt="" />
              <img className="mt-6 mx-4" src={v3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
