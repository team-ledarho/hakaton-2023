import useLanguage from './useLanguage'; 

export const SelectLanguage = () => {
  const { changeLanguage } = useLanguage(); 

  return (
    <div className="flex gap-2 mt-4">
      <button
        className="flex items-center bg-blue-600 border border-gray-200 rounded px-2 py-1 shadow-sm text-white font-semibold transition duration-250 hover:border-gray-500 hover:shadow-md hover:text-opacity-80 transform hover:-translate-y-1 active:bg-gray-100 active:border-gray-200 active:shadow-sm active:text-opacity-80 w-full"
        onClick={() => changeLanguage('ru')}
      >
        🇷🇺 РУ
      </button>
      <button
        className="flex items-center bg-blue-600 border border-gray-200 rounded px-2 py-1 shadow-sm text-white font-semibold transition duration-250 hover:border-gray-500 hover:shadow-md hover:text-opacity-80 transform hover:-translate-y-1 active:bg-gray-100 active:border-gray-200 active:shadow-sm active:text-opacity-80 w-full"
        onClick={() => changeLanguage('en')}
      >
        🇬🇧 EN
      </button>
    </div>
  );
};
