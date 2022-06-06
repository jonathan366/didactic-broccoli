import "./App.css";
import Header from "./components/Header";
import Mentors from "./components/Mentors";
import Partners from "./components/Partners";
import img1 from "./assets/1.png";
import img9 from "./assets/9.png";
import img10 from "./assets/10.png";
import WhatToComeFor from "./components/WhatToComeFor";

import { useLanguage } from "./contexts/LanguageContext";
import Venue from "./components/Venue";

function App() {
  const { language } = useLanguage();

  return (
    <div className="w-full">
      <Header />
      <div className=" px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center flex-col txt-col text-xl">
        <div className="flex items-center my-12">
          <p className="sm:text-base text-xs">
            <span className="font-semibold text-lg sm:text-3xl">Jul 1</span>{" "}
            Friday | 19:00 JST
          </p>
          <img src={img1} alt="img1" className="mt-1 sm:mx-4 mx-3" />
          <p className="sm:text-base text-xs">
            <span className="font-semibold text-lg sm:text-3xl">Jul 3</span>{" "}
            Sunday | 20:00 JST
          </p>
        </div>

        {language === "ja" ? (
          <>
            <p className="max-w-4xl text-center tracking-wider leading-8 md:leading-9">
              開発者、起業家、そしてWeb3ファンのみなさん！ハッカーハウスに参加してWeb3開発やリサーチ、ネットワーキングができる楽しい3日間をお過ごしください！
            </p>
            <p className="mt-16 max-w-5xl text-center tracking-wider leading-8 md:leading-9">
              <span className="border-b-2 border-[#7B3FE4]">Polygon</span>{" "}
              Hacker
              Houseは3日間にわたって開催され、ワークショップやアクティビティ、アイデアを実現するためのハッキングセッションがあります。ハッカソンよりも100倍楽しく有意義で、ネットワーキングの機会も用意しています。
            </p>
            <a
              target="_blank"
              href="https://polygon53584.ac-page.com/tokyo-hh-july-2022"
              className="btn w-36 py-4 mt-16 mb-16"
            >
              登録
            </a>
          </>
        ) : (
          <>
            <p className="max-w-4xl text-center tracking-wider leading-8 md:leading-9">
              Are you a developer, entrepreneur, or Web3 enthusiast in{" "}
              <span className="border-b-2 border-[#7B3FE4]">Tokyo?</span> Join
              us for three days of Web3 hacking, learning, networking, and a ton
              of fun!
            </p>
            <p className="mt-16 max-w-5xl text-center tracking-wider leading-8 md:leading-9">
              <span className="border-b-2 border-[#7B3FE4]">Polygon</span>{" "}
              Hacker House is a three-day in-person event with awesome
              workshops, activities and fully flexible hacking sessions where
              you can bring your ideas to life. Think a hackathon, but with 100x
              more fun and incredible networking opportunities
            </p>
            <a
              target="_blank"
              href="https://polygon53584.ac-page.com/tokyo-hh-july-2022"
              className="btn w-36 py-4 mt-16 mb-16"
            >
              Register
            </a>
          </>
        )}
      </div>
      <Partners />
      <WhatToComeFor />
      {/* <Mentors /> */}
      <Venue />
      <div className="py-16 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        {/* <div className="flex flex-wrap justify-evenly items-center">
          <img src={img9} alt="img9" className="mt-7" />
          <div className="flex space-x-4 sm:mt-7 mt-20">
            <img src={img10} alt="img10" className="h-10" />
            <div className="flex flex-col">
              {language === "ja" ? (
                <>
                  <p className="txt-col btn2 text-4xl font-bold border-b-[4px] border-[#7B3FE4]">
                    パートナー
                  </p>
                  <p className="txt-col effect-underline2 text-lg pt-3">
                    方向 <span className="text-[#7B3FE4] font-bold">→</span>
                  </p>
                </>
              ) : (
                <>
                  <p className="txt-col btn2 text-4xl font-bold border-b-[4px] border-[#7B3FE4]">
                    Tunnel Tokyo
                  </p>
                  <p className="txt-col text-lg pt-3 btn3 effect-underline">
                    Directions{" "}
                    <span className="text-[#7B3FE4] font-bold">→</span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div> */}
        <div className="flex flex-col px-8 sm:px-12 py-8 sm:mx-16 md:mx-28 sm:mt-48 mt-32 mb-8 border border-[#8247E5] rounded-xl grad-bg">
          {language === "ja" ? (
            <>
              <p className="txt-col text-5xl font-bold">
                お席の数に限りがあります。
              </p>
              <p className="text-white pt-3">
                このイベントは完全無料です。チケットが売り切れる前にご登録ください！
              </p>
              <a
                target="_blank"
                href="https://polygon53584.ac-page.com/tokyo-hh-july-2022"
                className="btn w-32 py-3  mt-8"
              >
                Register
              </a>
            </>
          ) : (
            <>
              <p className="txt-col text-5xl font-bold">Limited Seats!</p>
              <p className="text-white">
                The hacker house event is 100% FREE, so register now before
                seats run out!
              </p>
              <a
                target="_blank"
                href="https://polygon53584.ac-page.com/tokyo-hh-july-2022"
                className="btn w-32 py-3  mt-8"
              >
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
