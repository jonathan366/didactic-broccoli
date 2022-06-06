import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";

import img12 from "../assets/12.png";
import img13 from "../assets/13.png";
import img14 from "../assets/14.png";
import img15 from "../assets/15.png";
import img16 from "../assets/16.png";
import img17 from "../assets/17.png";

const data = [
  {
    image: img17,
    title: "Mentorship from team Polygon & its ecosystem projects",
    tileJapanese:
      "PolygonチームやPolygonエコシステムプロジェクトによるメンタリング",
  },
  {
    image: img16,
    title: "Fun building home with fellow hackers",
    tileJapanese: "エンジニアや起業家が集まる楽しい空間",
  },
  {
    image: img13,
    title: "Networking with VCs & ecosystem partners",
    tileJapanese: "VCやエコシステムパートナーとのネットワーキング",
  },
  {
    image: img15,
    title: "Hacking space with great Wifi & workstaions",
    tileJapanese: "快適な環境やWIFIが用意されたコワーキングスペース",
  },
  {
    image: img14,
    title: "Lounges to rest & relax, with great food & drinks",
    tileJapanese: "食事やドリンクを備えた、休憩やリラックスのためのラウンジ",
  },
  {
    image: img12,
    title: "Fun sessions, workshops / panels",
    tileJapanese: "セッションやワークショップ、パネルディスカッション",
  },
];

const bountyData = [
  {
    title: "Defi",
    price: "2500",
  },
  {
    title: "Metaverse",
    price: "2500",
  },
  {
    title: "Gaming",
    price: "2500",
  },
  {
    title: "NFT",
    price: "2500",
  },
];

const WhatToComeFor = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center mt-16">
      {language === "ja" ? (
        <p className="text-center txt-col text-3xl sm:text-5xl font-bold border-b-[6px] border-[#7B3FE4]">
          どんなことができるの？
        </p>
      ) : (
        <p className="text-center txt-col text-3xl sm:text-5xl font-bold border-b-[6px] border-[#7B3FE4]">
          What to come for ?
        </p>
      )}
      <div className="px-4 sm:mt-12 mt-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-7 row-gap-5 sm:grid-cols-2 lg:grid-cols-3 my-16">
          {data.map((item) => (
            <div
              key={item.title}
              className="transition duration-500 mx-4 my-4 flex flex-col"
            >
              <div className="h-16 w-16  flex justify-center items-center">
                <img className="w-14 h-14" src={item.image} alt="" />
              </div>
              {language === "ja" ? (
                <p className="text-white text-lg mt-4">{item.tileJapanese}</p>
              ) : (
                <p className="text-white text-lg mt-4">{item.title}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mx-4">
          <div className="flex items-center mt-16">
            {language === "ja" ? (
              <label className="text-white text-3xl sm:text-4xl font-bold">
                賞品
              </label>
            ) : (
              <label className="text-white text-3xl sm:text-4xl font-bold">
                Bounties
              </label>
            )}

            <img className="mt-2 ml-3" src={img7} alt="" />
          </div>
          <div className="grid gap-7 row-gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-10 mb-24">
            {bountyData.map((item) => (
              <div
                key={item.title}
                className="bg-bounty rounded sm:w-64 h-40 w-full flex justify-center items-center relative"
              >
                <img className="sm:w-52 w-60 sm:h-28 h-32" src={img8} />
                <div className="flex flex-col items-center absolute">
                  <p className="text-white text-lg font-semibold">
                    {item.title}
                  </p>
                  <p className="text-white text-3xl font-bold">
                    $ {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatToComeFor;
