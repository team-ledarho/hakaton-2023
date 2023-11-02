import { useEffect, useState } from 'react';
import i18next from 'i18next';

const useLanguage = () => {
  const [language, setLanguage] = useState(localStorage.getItem('locale_fkkfpas') || i18next.language);

  useEffect(() => {
    i18next.changeLanguage(language);
    localStorage.setItem("locale_fkkfpas", language);
  }, [language]);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return { language, changeLanguage };
};

export default useLanguage;
