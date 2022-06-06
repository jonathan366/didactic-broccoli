import React, { useContext, useState, useEffect } from "react";

const LanguageContext = React.createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  //   const changeLanguage = (lang) => {
  //     setLanguage(lang);
  //   };
  return (
    <LanguageContext.Provider value={{ setLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};
