import useLanguage from './useLanguage';
import { useEffect, useState } from 'react';

const SelectLanguage = () => {
  const { changeLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('localelang_zarzar') || 'ru'); // Получаем значение из localStorage или устанавливаем значение по умолчанию

  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    changeLanguage(selectedValue);
    setSelectedLanguage(selectedValue);
  };

  useEffect(() => {
    // При монтировании компонента устанавливаем значение выбранного языка на основе localStorage
    const storedLanguage = localStorage.getItem('localelang_zarzar');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  return (
      <select
        className="bg-green-600 border border-gray-200 py-2 rounded-md shadow-sm text-white font-semibold transition duration-250 hover:border-gray-500 hover:shadow-md hover:text-opacity-80 active:text-opacity-80"
        onChange={handleLanguageChange}
        value={selectedLanguage} // Устанавливаем выбранное значение
      >
        <option value="ru">🇷🇺 РУ</option>
        <option value="en">🇬🇧 EN</option>
      </select>
  );
};

export default SelectLanguage;
