import { Layout } from '@components/layout';
import Strip from '@components/landing/strip';
import Technologies from '@components/landing/Technologies';
import Footer from '@components/footer';
import Header from '@components/header';
import Partners from '@components/landing/Partners';
import AboutUs from '@components/landing/aboutUs';

export const HomePage = () => {
  const questions = [
    {
      title: 'Какие преимущества регистрации на вашем сайте?',
      answer:
        'Регистрация на нашем сайте дает вам доступ к удобной системе поиска мероприятий, возможности получать уведомления о будущих событиях, а также легкости и безопасности оплаты. Вы также сможете сохранить историю посещенных мероприятий и управлять своими билетами в одном месте.',
  },
    {
      title: 'В чем основное предназначение вашего сайта?',
      answer:
        'Наш сайт предназначен для удобной регистрации на мероприятия различного рода, начиная от концертов и заканчивая семинарами и выставками. Мы предоставляем возможность легко находить интересующие вас события и быстро записываться на них.',
    },
    {
      title: 'Как я могу найти мероприятия, которые меня интересуют?',
      answer:
        'Для поиска мероприятий, которые соответствуют вашим интересам, используйте нашу удобную систему фильтров. Вы можете искать по категориям, дате, местоположению и другим параметрам, чтобы найти именно то, что вам нужно.',
    },
    {
      title: 'Как я могу узнать больше о деталях мероприятия?',
      answer:
        'Вся необходимая информация о мероприятии, включая дату, время, местоположение, описание и список спикеров или артистов, доступна на странице мероприятия. Вы также можете связаться с организаторами через нашу платформу, если у вас есть дополнительные вопросы.',
    },
  ];

  return (
    <Layout>
      <Header />
      <head>
        <title>Зарзар</title>
        <meta
          name="description"
          content="Найди для себя интересное мероприятие"
        />
      </head>
      <main className="min-h-[70vh] bg-secondary-100">
        <section className="px-6 pb-28 pt-10 md:pb-36">
          <h1 className="m-auto mt-10 grid max-w-screen-xl grid-cols-3 gap-5 text-4xl font-bold md:text-8xl lg:text-9xl">
            <span className="col-span-3">БОЛЬШЕ 100 МЕРОПРИЯТИЙ</span>
            <span className="col-span-3">
              <span className="rounded-xl bg-brand-green px-4 text-white">
                ТОЛЬКО
              </span>{' '}
              И ЖДУТ —
            </span>
            <span className="col-span-3 justify-self-end">ТЕБЯ</span>
          </h1>
        </section>

        <Partners className="mb-10 flex justify-around py-0 md:mb-24 md:py-8" />

        <section
          className="m-auto grid max-w-screen-xl grid-cols-1 gap-3 px-6 py-24 md:grid-cols-3"
          id="benefits"
        >
          <div className="grid grid-cols-3 transition-transform hover:-translate-y-2">
            <div
              className="col-start-3 h-7 rounded-t-lg border-b-2
      border-dashed border-secondary-100 bg-white"
            />

            <div className="col-span-3 rounded-b-lg rounded-tl-lg bg-white p-7">
              <span className="text-4xl font-bold">1 - ШАГ</span>
              <h3 className="pt-10 text-xl font-bold">
                👥 Создать свой аккаунт
              </h3>
              <p className="pt-2">
                Будь более открыт к своим любимым мероприятиям
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 transition-transform hover:-translate-y-2">
            <div
              className="col-start-3 h-7 rounded-t-lg border-b-2
      border-dashed border-secondary-100 bg-gray-800"
            />

            <div className="col-span-3 rounded-b-lg rounded-tl-lg bg-gray-800 p-7 text-white">
              <span className="text-4xl font-bold">2 - ШАГ</span>
              <h3 className="pt-10 text-xl font-bold">
                🏂 ВЫБРАТЬ МЕРОПРИЯТИЕ
              </h3>
              <p className="pt-2">
                Наш сервис полон функционала и разнообразия в выборе
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 transition-transform hover:-translate-y-2">
            <div
              className="col-start-3 h-7 rounded-t-lg border-b-2
      border-dashed border-secondary-100 bg-brand-green"
            />

            <div className="col-span-3 rounded-b-lg rounded-tl-lg bg-brand-green p-7 text-white">
              <span className="text-4xl font-bold">3 - ШАГ</span>
              <h3 className="pt-10 text-xl font-bold">⚡️ УЧАСТВОВАТЬ</h3>
              <p className="pt-2">
                При выборе интересного мероприятия остается только ждать начала!
              </p>
            </div>
          </div>
        </section>

        <AboutUs />

        <Technologies />

        <Strip />

        <section className="bg-gray-800 py-24" id="propositions">
          <div className="m-auto grid max-w-screen-xl grid-cols-1 gap-3 text-lg text-white md:grid-cols-3">
            <div
              className="m-6 grid aspect-square place-content-center rounded-full
          bg-brand-green p-14 text-center text-brand-dark"
            >
              Собирайтесь вместе с друзьями
            </div>
            <div
              className="mx-6 grid aspect-square place-content-center rounded-full border-[3px]
        border-dashed border-white p-14 text-center transition-colors
        duration-500 hover:bg-white hover:text-brand-green md:mx-0"
            >
              Получайте новые знакомства
            </div>
            <div
              className="m-6 grid aspect-square place-content-center rounded-full
          bg-brand-green p-14 text-center text-brand-dark"
            >
              Проводите время в своё удовольствие
            </div>
          </div>
        </section>
        <section className="bg-brand-green py-32">
          <div className="px-4 md:px-6">
            <div className="m-auto grid max-w-screen-xl grid-cols-3 gap-4 rounded-3xl bg-brand-dark p-5 text-white md:rounded-[3rem] md:p-16">
              <h2 className="col-span-3 row-start-1 text-3xl font-bold md:text-6xl lg:text-8xl">
                <span className="rounded-xl bg-brand-green px-2 text-white md:px-4">
                  ПОЛУЧАЙ НАГРАДЫ
                </span>
              </h2>
              <h2 className="col-span-3 row-start-2 text-3xl font-bold md:text-6xl lg:text-8xl">
                ЗА ВЫПОЛНЕНИЕ
              </h2>
              <h2 className="col-span-3 col-start-1 row-start-3 text-3xl font-bold md:col-start-2 md:text-6xl lg:text-8xl">
                ЗАДАНИЙ
              </h2>
              <p className="col-span-3 col-start-1 row-start-4 text-left text-lg md:col-span-1 md:col-start-2">
                Наша гордость - это ваша активность 🔥
              </p>
              <div className="col-start-2 row-start-5 mt-1 grid aspect-square h-full w-full place-content-center justify-self-end md:col-start-3 md:row-span-2 md:row-start-3">
                <a
                  href="/login"
                  aria-label="Посмотреть"
                  className="relative flex items-center justify-center italic"
                >
                  <p className="absolute z-20 text-2xl uppercase">Посмотреть</p>
                  <svg
                    className="spin z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="220"
                    height="220"
                    viewBox="0 0 220 220"
                    fill="none"
                  >
                    <path
                      d="M96.5389 8.39153C102.033 -2.78675 117.969 -2.78676 123.463 8.39152L124.806 11.1238C128.81 19.2711 139.077 22.022 146.618 16.9684L149.147 15.2736C159.494 8.33988 173.295 16.308 172.464 28.7356L172.261 31.7733C171.655 40.8311 179.171 48.3468 188.228 47.741L191.266 47.5378C203.694 46.7065 211.662 60.5076 204.728 70.8546L203.033 73.3837C197.98 80.9251 200.731 91.1918 208.878 95.196L211.61 96.5389C222.788 102.033 222.788 117.969 211.61 123.463L208.878 124.806C200.731 128.81 197.98 139.077 203.033 146.618L204.728 149.147C211.662 159.494 203.694 173.295 191.266 172.464L188.228 172.261C179.171 171.655 171.655 179.171 172.261 188.228L172.464 191.266C173.295 203.694 159.494 211.662 149.147 204.728L146.618 203.033C139.077 197.98 128.81 200.731 124.806 208.878L123.463 211.61C117.969 222.788 102.033 222.788 96.5389 211.61L95.196 208.878C91.1918 200.731 80.9251 197.98 73.3837 203.033L70.8546 204.728C60.5076 211.662 46.7065 203.694 47.5378 191.266L47.741 188.228C48.3468 179.171 40.8311 171.655 31.7733 172.261L28.7356 172.464C16.308 173.295 8.33988 159.494 15.2736 149.147L16.9684 146.618C22.022 139.077 19.2711 128.81 11.1239 124.806L8.39153 123.463C-2.78675 117.969 -2.78676 102.033 8.39152 96.5389L11.1238 95.196C19.2711 91.1918 22.022 80.9251 16.9684 73.3837L15.2736 70.8546C8.33988 60.5076 16.3079 46.7065 28.7356 47.5378L31.7733 47.741C40.8311 48.3468 48.3468 40.8311 47.741 31.7733L47.5378 28.7356C46.7065 16.308 60.5076 8.33988 70.8546 15.2736L73.3837 16.9684C80.9251 22.022 91.1918 19.2711 95.196 11.1239L96.5389 8.39153Z"
                      fill="rgb(132 217 155)"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="m-auto mt-24 grid max-w-screen-xl gap-3 px-5 py-24 md:grid-cols-3 md:px-6"
          id="price"
        >
          <h2 className="mb-5 text-2xl font-bold md:col-span-2 md:col-start-2 md:mb-10 md:text-6xl">
            <span className="rounded-lg bg-brand-green px-4 text-white">
              ВЫДЕЛЯЙСЯ
            </span>
            <span className="text-secondary-700"> СРЕДИ ДРУГИХ </span>
          </h2>

          <div className="grid grid-rows-[auto_1fr_auto] rounded-xl bg-white p-8">
            <header>
              <h3 className="text-4xl font-bold text-secondary-700 md:text-5xl">
                База
              </h3>
              <p className="mt-2 text-3xl font-bold text-secondary-500 md:text-4xl">
                бесплатно
              </p>
            </header>

            <ul className="mt-14 list-inside list-disc text-lg">
              <li>Имеет базовый функционал</li>
              <li>Не может выбрать для себя эмодзи рядом с именем</li>
              <li>Не может поставить свою аватарку</li>
              <li>Не может поменять фон своего профиля</li>
              <li>Не может писать комментарии</li>
              <li>Присутствует реклама</li>
            </ul>
          </div>
          <div className="grid grid-rows-[auto_1fr_auto] rounded-xl bg-brand-dark p-8">
            <header>
              <h3 className="text-4xl font-bold text-white md:text-5xl">Про</h3>
              <p className="mt-2 text-3xl font-bold text-secondary-400 md:text-4xl">
                290 ₽/месяц
              </p>
            </header>

            <ul className="mt-14 list-inside list-disc text-lg text-secondary-50">
              <li>Имеет базовый функционал</li>
              <li>Может поставить свою аватарку</li>
              <li>Может выбрать для себя эмодзи рядом с именем</li>
              <li>Может писать комментарии</li>
              <li>Отключена реклама</li>
            </ul>

            <footer className="mt-8 flex justify-center md:justify-start">
              <button
                className="block w-fit rounded-full bg-white px-9 py-4
            font-bold text-brand-dark transition-colors hover:bg-brand-green hover:text-white"
              >
                ПОЛУЧИТЬ
              </button>
            </footer>
          </div>
          <div className="grid grid-rows-[auto_1fr_auto] rounded-xl bg-gray-800 p-8">
            <header>
              <h3 className="text-4xl font-bold text-white md:text-5xl">
                Спонсор
              </h3>
              <p className="mt-2 text-3xl font-bold text-secondary-100 md:text-4xl">
                490 ₽/месяц
              </p>
            </header>

            <ul className="mt-14 list-inside list-disc text-lg text-secondary-50">
              <li>Имеет весь функционал</li>
              <li>Может поменять фон своего профиля</li>
              <li>Может поставить свою аватарку</li>
              <li>Имеет особенную эмблему</li>
            </ul>

            <footer className="mt-8 flex justify-center md:justify-start">
              <span
                className="block w-fit cursor-pointer rounded-full bg-white px-9 py-4
            font-bold text-black transition-colors hover:bg-brand-green hover:text-white"
              >
                ПОЛУЧИТЬ
              </span>
            </footer>
          </div>
        </section>
        <section
          className="m-auto max-w-screen-xl px-6 py-24 md:mb-32"
          id="faq"
        >
          <h2 className="mb-10 text-4xl font-bold md:text-6xl">
            <span className="text-secondary-700"> ОСТАЛИСЬ </span>
            <span className="rounded-lg bg-brand-green px-4 text-white">
              {' '}
              ВОПРОСЫ?{' '}
            </span>
          </h2>

          {questions.map((question, index) => (
            <details key={index} className="mt-3 rounded-xl bg-white">
              <summary className="flex cursor-pointer select-none items-center justify-between gap-4 px-10 py-6 text-xl font-bold text-secondary-600">
                {question.title}
                <div className="arrow rotate-180 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="12"
                    viewBox="0 0 26 12"
                    fill="none"
                  >
                    <path d="M1 11L13.6476 1.4L25 11" stroke="black" />
                  </svg>
                </div>
              </summary>
              <p className="px-10 pb-12 text-secondary-500">
                {question.answer}
              </p>
            </details>
          ))}
        </section>
        <Footer />
      </main>
    </Layout>
  );
};
