import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Transition } from "@headlessui/react";
import logo from "../assets/logo.png";
import hero from "../assets/hero.svg";
import img11 from "../assets/11.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setLanguage, language } = useLanguage();
  return (
    <div className="div-bg w-full">
      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-5 py-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between  w-full">
              <div className="flex items-center">
                <a href="/">
                  <img className="sm:h-auto h-14" src={logo} alt="logo" />
                </a>
              </div>

              <div className="flex items-center ">
                <div className="flex items-center txt-col space-x-1 font-semibold mr-4">
                  <button onClick={() => setLanguage("en")}>A</button>{" "}
                  <span>|</span>{" "}
                  <button onClick={() => setLanguage("ja")}>あ</button>
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                  {language == "ja" ? (
                    <a
                      href="https://polygon.technology/"
                      target="_blank"
                      className="txt-col block px-3 py-2 text-xl font-medium"
                    >
                    <span className="font-bold">Polygon</span>とは？
                    </a>
                  ) : (
                    <a
                      href="https://polygon.technology/"
                      target="_blank"
                      className="txt-col block px-3 py-2 text-xl font-medium"
                    >
                      What is <span className="font-bold">Polygon</span> ?
                    </a>
                  )}

                  <a target="_blank" href="https://polygon53584.ac-page.com/tokyo-hh-july-2022" className="btn w-40 ml-4 block  py-4 font-medium">
                    Register
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* <span className="sr-only">Open main menu</span> */}
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden absolute primary-bg w-full -mt-4 "
              id="mobile-menu"
            >
              <div ref={ref} className="px-2 pt-2 pb-6 space-y-4 sm:px-3">
                {language == "ja" ? (
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="txt-col block px-3 py-2 text-base font-medium"
                  >
                    とは <span className="font-bold">Polygon</span> ?
                  </a>
                ) : (
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="txt-col block px-3 py-2 text-base font-medium"
                  >
                    What is <span className="font-bold">Polygon</span> ?
                  </a>
                )}

                <a
                  target="_blank" 
                  href="https://polygon53584.ac-page.com/tokyo-hh-july-2022"
                  className="btn w-36 ml-4 block px-3 py-2 text-base font-medium"
                >
                  Register
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <div>
        <div className="flex justify-center">
          <img src={img11} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Header;
