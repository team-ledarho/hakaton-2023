import { useState } from 'react';
import SelectLanguage from '@components/language';
import { useTranslation } from 'react-i18next';
import { selectorUser } from '@services/slices/authSlice';
import { useSelector } from 'react-redux';
import { useCurrentQuery } from '@services/auth/authQuery';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = useSelector(selectorUser);
  const { data } = useCurrentQuery();

  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-secondary-100 px-5 py-8">
        <div className="m-auto flex max-w-screen-xl items-center justify-between">
          <nav className="basis-1/4">
            <a className="flex items-center gap-4" href="/">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                width="119"
                height="119"
                viewBox="0 0 119 119"
                fill="none"
              >
                <path
                  d="M36.2979 64.5459C48.5381 49.1454 65.5069 38.2015 84.5851 33.4036C92.5967 31.4121 102.016 30.8857 108.105 36.4366C110.387 38.5222 111.949 41.2765 112.569 44.3048C113.189 47.3331 112.835 50.48 111.557 53.2944C110.278 56.1089 108.142 58.4465 105.454 59.9722C102.765 61.4979 99.6628 62.1334 96.5911 61.7876C89.3577 60.9865 83.3605 54.9205 76.0813 54.7717C70.0383 54.6573 64.7506 58.6631 60.3785 62.7834C56.0065 66.9036 51.7603 71.6648 46.0492 73.5991"
                  fill="rgb(22 163 74)"
                />
                <path
                  d="M39.8917 68.1394C46.8212 59.4097 55.3707 52.0999 65.0711 46.6111C74.067 41.5408 85.1002 36.8598 95.6069 37.1116C99.956 37.2146 104.488 38.6681 106.606 42.754C107.529 44.4749 107.9 46.4382 107.669 48.3773C107.437 50.3164 106.615 52.1373 105.312 53.5926C97.6326 61.8217 87.229 51.2349 78.8969 49.9645C71.3431 48.82 64.7621 52.3336 59.1654 57.0948C54.5873 61.0205 50.593 66.6058 44.7101 68.7346C43.4283 69.1234 42.3451 69.9902 41.6847 71.1556C41.0242 72.3209 40.8371 73.6956 41.1621 74.9951C41.8374 77.4902 44.8246 79.4931 47.4226 78.5546C54.1524 76.1167 58.8678 71.264 64.0067 66.4341C68.1041 62.5427 73.0369 58.6171 78.977 60.3911C84.917 62.1651 90.0903 66.251 96.614 66.8805C99.6626 67.1041 102.722 66.6262 105.557 65.4834C108.392 64.3406 110.928 62.5634 112.969 60.2881C115.14 57.8276 116.66 54.863 117.392 51.6645C118.124 48.466 118.043 45.1353 117.158 41.9758C116.253 38.7969 114.582 35.8886 112.291 33.506C110 31.1234 107.16 29.3393 104.019 28.3102C92.0474 24.1213 77.6951 29.3517 66.7879 34.3304C53.5049 40.4178 41.8321 49.5311 32.7041 60.9404C30.9874 63.0921 30.6097 66.045 32.7041 68.1394C34.4781 69.9249 38.1749 70.3026 39.9032 68.1394H39.8917Z"
                  fill="rgb(22 163 74)"
                />
                <path
                  d="M82.2044 79.2531C69.9596 94.6486 52.9927 105.591 33.9172 110.395C25.9056 112.387 16.4862 112.925 10.3973 107.362C8.12332 105.28 6.56489 102.533 5.94431 99.5127C5.32373 96.4925 5.67268 93.3533 6.94141 90.5431C8.21014 87.7329 10.3338 85.395 13.0096 83.863C15.6855 82.3309 18.7767 81.6829 21.8425 82.0114C29.0759 82.8125 35.0846 88.8785 42.3637 89.0273C48.4068 89.1418 53.6944 85.1359 58.055 81.0156C62.4157 76.8954 66.6733 72.1342 72.3958 70.2"
                  fill="rgb(22 163 74)"
                />
                <path
                  d="M78.6106 75.6254C71.6816 84.3555 63.1319 91.6654 53.4312 97.1538C44.4353 102.224 33.3907 106.905 22.884 106.653C18.5349 106.55 14.014 105.097 11.8967 101.011C10.9701 99.2908 10.5972 97.3268 10.8286 95.3869C11.0601 93.447 11.8848 91.6259 13.19 90.1722C20.8582 81.9431 31.2619 92.5414 39.6054 93.8003C47.1593 94.9448 53.7402 91.4312 59.3369 86.67C63.915 82.7443 67.9094 77.159 73.7807 75.0302C75.0647 74.6437 76.1506 73.7779 76.8133 72.6123C77.476 71.4467 77.6647 70.0707 77.3402 68.7697C76.6535 66.2747 73.6777 64.2718 71.0797 65.2103C64.3385 67.6481 59.5773 72.5008 54.4956 77.3307C50.3868 81.2221 45.4654 85.1478 39.5139 83.3737C33.5624 81.5997 28.4121 77.5138 21.8769 76.8844C18.83 76.6616 15.7727 77.14 12.9395 78.2828C10.1064 79.4256 7.57272 81.2024 5.53314 83.4768C3.36323 85.9378 1.84246 88.9019 1.10893 92.0998C0.37539 95.2978 0.45233 98.6284 1.33276 101.789C2.23974 104.969 3.91296 107.877 6.20571 110.26C8.49846 112.643 11.3407 114.426 14.4833 115.455C26.4435 119.644 40.8072 114.413 51.703 109.434C64.9892 103.347 76.6658 94.234 85.7982 82.8244C87.5035 80.6727 87.8926 77.7198 85.7982 75.6254C84.0127 73.8514 80.3159 73.4622 78.5992 75.6254H78.6106Z"
                  fill="rgb(22 163 74)"
                />
                <path
                  d="M3.31925 33.0851L3.31264 33.0945C-1.33413 39.6793 0.236933 48.7842 6.82171 53.431L95.0224 115.673C101.607 120.32 110.712 118.749 115.359 112.164L115.366 112.154C120.012 105.57 118.441 96.4646 111.856 91.8178L23.6558 29.576C17.071 24.9293 7.96602 26.5003 3.31925 33.0851Z"
                  fill="rgb(22 163 74)"
                />
                <path
                  d="M49.4939 31.8704C57.9704 31.8704 64.8419 24.9989 64.8419 16.5224C64.8419 8.04595 57.9704 1.17445 49.4939 1.17445C41.0175 1.17445 34.146 8.04595 34.146 16.5224C34.146 24.9989 41.0175 31.8704 49.4939 31.8704Z"
                  fill="rgb(22 163 74)"
                />
                <path
                  d="M49.4945 32.1338C46.3946 32.136 43.3636 31.2187 40.7852 29.4979C38.2068 27.7771 36.1968 25.3302 35.0094 22.4667C33.8221 19.6032 33.5109 16.4518 34.1151 13.4114C34.7193 10.3709 36.2118 7.57801 38.4037 5.38605C40.5957 3.19409 43.3886 1.7016 46.429 1.09739C49.4695 0.493186 52.6208 0.804429 55.4843 1.99176C58.3478 3.17908 60.7948 5.18912 62.5156 7.76754C64.2364 10.346 65.1537 13.3769 65.1514 16.4768C65.1484 20.6283 63.4979 24.609 60.5623 27.5446C57.6267 30.4802 53.646 32.1307 49.4945 32.1338ZM49.4945 1.44926C46.5252 1.45379 43.6239 2.33783 41.1566 3.98981C38.6894 5.64178 36.7668 7.98766 35.6316 10.7313C34.4964 13.475 34.1994 16.4934 34.7781 19.4057C35.3568 22.318 36.7853 24.9936 38.8833 27.0947C40.9812 29.1959 43.6547 30.6285 46.5661 31.2116C49.4775 31.7948 52.4964 31.5023 55.2418 30.3713C57.9871 29.2402 60.3359 27.3212 61.9916 24.8565C63.6473 22.3918 64.5358 19.4918 64.5449 16.5225C64.5434 14.5476 64.1529 12.5923 63.3957 10.7683C62.6385 8.94423 61.5295 7.28717 60.132 5.89174C58.7344 4.4963 57.0757 3.38983 55.2505 2.63544C53.4253 1.88105 51.4694 1.49354 49.4945 1.49505V1.44926Z"
                  fill="rgb(22 163 74)"
                />
              </svg>
              <span className="hidden text-2xl font-medium text-green-600 md:inline">
                {t('Zarzar')}
              </span>
            </a>
          </nav>

          <nav className="hidden flex-1 justify-center gap-5 md:flex">
            <a className="text-xs md:text-base" href="/events">
              Мероприятия
            </a>
            <a className="text-xs md:text-base" href="/#benefits">
              Процесс
            </a>
            <a className="text-xs md:text-base" href="/#price">
              Подписки
            </a>
            <a className="text-xs md:text-base" href="/#faq">
              ЧАО
            </a>
          </nav>

          <nav className="flex items-center justify-end md:basis-1/4">
            <SelectLanguage />
            <a
              className="ml-2 rounded-md bg-green-600 px-6 py-2 text-xs text-white md:px-8 md:py-2 md:text-base"
              href={user ? '/personal' : '/login'}
            >
              {user ? 'Аккаунт' : 'Войти'}
            </a>

            <button
              onClick={toggleMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-secondary-500 md:hidden"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Открыть меню</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </nav>

          {isMenuOpen && (
            <div className="fixed left-0 top-0 z-50 h-full w-full bg-gray-800">
              <div className="mx-5 my-8 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="bold pb-3 text-3xl">Зарзар</h2>
                    <a
                      href="mailto:support@spentoday.com"
                      className="hover:underline"
                    >
                      support@zarzar.ru
                    </a>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="h-10 w-10 p-2 text-5xl text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M1 1L15 15" stroke="white" />
                      <path d="M15 1L1 15" stroke="white" />
                    </svg>
                  </button>
                </div>
                <div className="bold absolute bottom-8 text-5xl transition-colors">
                <Link
                      className="block pb-6 hover:text-gray-500"
                      to="/events"
                    >
                      Мероприятия
                    </Link>
                  <a
                    className="block pb-6 hover:text-gray-500"
                    onClick={toggleMenu}
                    href="/#aboutUs"
                  >
                    Про нас
                  </a>
                  <a
                    className="block pb-6 hover:text-gray-500"
                    onClick={toggleMenu}
                    href="/login"
                  >
                    Войти
                  </a>
                  <a
                    className="block pb-6 hover:text-gray-500"
                    onClick={toggleMenu}
                    href="/#benefits"
                  >
                    Процесс
                  </a>
                  <a
                    className="block pb-6 hover:text-gray-500"
                    onClick={toggleMenu}
                    href="/#price"
                  >
                    Подписки
                  </a>
                  <a
                    className="block pb-6 hover:text-gray-500"
                    onClick={toggleMenu}
                    href="/#faq"
                  >
                    ЧАО
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
