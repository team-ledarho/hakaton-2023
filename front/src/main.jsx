import './index.css';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { store } from './store/store';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';
import ruLocale from 'dayjs/locale/ru';
import dayjs from 'dayjs';
import { Toaster } from 'react-hot-toast';

dayjs.extend(customParseFormat);
dayjs.extend(localeData);
dayjs.locale({
  ...ruLocale,
  months: [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ],
  monthsShort: [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ],
});

const container = document.querySelector('#root');
const root = createRoot(container);

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ru', 'en'],
    fallbackLng: 'ru',
    debug: false,
    detection: {
      order: ['localStorage', 'path', 'cookie', 'htmlTag'],
      lookupLocalStorage: 'localelang_zarzar',
      caches: ['localStorage', 'cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
  });

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Toaster />
  </Provider>,
);
