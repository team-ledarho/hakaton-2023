import { Layout } from "@components/layout"
import Header from "@components/landing/header";
import Strip from '@components/landing/strip';
import Technologies from '@components/landing/Technologies';
import Footer from '@components/landing/footer';
import Partners from '@components/landing/Partners';
import AboutUs from '@components/landing/aboutUs';

export const HomePage = () => {

  const questions = [
    {
      title: "Какие преимущества регистрации на вашем сайте?",
      answer: "Регистрация на нашем сайте дает вам доступ к удобной системе поиска мероприятий, возможности получать уведомления о будущих событиях, а также легкости и безопасности оплаты. Вы также сможете сохранить историю посещенных мероприятий и управлять своими билетами в одном месте."
    },
    {
      title: "В чем основное предназначение вашего сайта?",
      answer:
        "Наш сайт предназначен для удобной регистрации на мероприятия различного рода, начиная от концертов и заканчивая семинарами и выставками. Мы предоставляем возможность легко находить интересующие вас события и быстро записываться на них."
    },
    {
      title: "Как я могу найти мероприятия, которые меня интересуют?",
      answer:
        'Для поиска мероприятий, которые соответствуют вашим интересам, используйте нашу удобную систему фильтров. Вы можете искать по категориям, дате, местоположению и другим параметрам, чтобы найти именно то, что вам нужно.'
    },
    {
      title:
        "Как я могу узнать больше о деталях мероприятия?",
      answer:
        "Вся необходимая информация о мероприятии, включая дату, время, местоположение, описание и список спикеров или артистов, доступна на странице мероприятия. Вы также можете связаться с организаторами через нашу платформу, если у вас есть дополнительные вопросы."
    }
  ]


  return (
    <Layout>
      <head>
        <title>Зарзар</title>
        <meta
          name="description"
          content="Найди для себя интересное мероприятие"
        />
      </head>
<Header />
      <main className="min-h-[70vh] bg-secondary-100">
        <section className="px-6 pt-10 pb-28 md:pb-36">
          <h1 className="max-w-screen-xl m-auto text-4xl md:text-8xl lg:text-9xl font-bold grid grid-cols-3 gap-5 mt-10">
            <span className="col-span-3">БОЛЬШЕ 100 МЕРОПРИЯТИЙ</span>
            <span className="col-span-3">
            <span className="rounded-xl bg-brand-green px-4 text-white">ТОЛЬКО</span> И ЖДУТ —
            </span>
            <span className="col-span-3 justify-self-end">ТЕБЯ</span>
          </h1>
        </section>

        <Partners className="py-0 mb-10 flex justify-around md:mb-24 md:py-8" />

        <section
  className="px-6 max-w-screen-xl m-auto py-24 grid grid-cols-1 md:grid-cols-3 gap-3"
  id="benefits"
>
  <div className="grid grid-cols-3 hover:-translate-y-2 transition-transform">
    <div
      className="col-start-3 bg-white h-7 rounded-t-lg
      border-b-2 border-dashed border-secondary-100"
    />

    <div className="col-span-3 bg-white rounded-b-lg rounded-tl-lg p-7">
      <span className="text-4xl font-bold">1 - ШАГ</span>
      <h3 className="font-bold text-xl pt-10">👥 Создать свой аккаунт</h3>
      <p className="pt-2">
        Будь более открыт к своим любимым мероприятиям
      </p>
    </div>
  </div>

  <div className="grid grid-cols-3 hover:-translate-y-2 transition-transform">
    <div
      className="col-start-3 bg-gray-800 h-7 rounded-t-lg
      border-b-2 border-dashed border-secondary-100"
    />

    <div
      className="col-span-3 text-white bg-gray-800 rounded-b-lg rounded-tl-lg p-7"
    >
      <span className="text-4xl font-bold">2 - ШАГ</span>
      <h3 className="font-bold text-xl pt-10">🏂 ВЫБЕРИ МЕРОПРИЯТИЕ</h3>
      <p className="pt-2">
        Наш сервис полон функционала и разнообразия в выборе
      </p>
    </div>
  </div>

  <div className="grid grid-cols-3 hover:-translate-y-2 transition-transform">
    <div
      className="col-start-3 bg-brand-green h-7 rounded-t-lg
      border-b-2 border-dashed border-secondary-100"
    />

    <div
      className="col-span-3 text-white bg-brand-green rounded-b-lg rounded-tl-lg p-7"
    >
      <span className="text-4xl font-bold">3 - ШАГ</span>
      <h3 className="font-bold text-xl pt-10">⚡️ УЧАСТВУЙ</h3>
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
    <div
      className="max-w-screen-xl m-auto grid grid-cols-1 gap-3 text-lg text-white md:grid-cols-3"
    >
      <div
        className="rounded-full aspect-square m-6 p-14 bg-brand-green
          grid place-content-center text-center text-brand-dark"
      >
        Собирайтесь вместе с друзьями
      </div>
      <div
        className="rounded-full aspect-square mx-6 md:mx-0 p-14 border-white
        border-dashed border-[3px] grid place-content-center text-center
        hover:bg-white hover:text-brand-green transition-colors duration-500"
      >
        Получайте новые знакомства
      </div>
      <div
        className="rounded-full aspect-square m-6 p-14 bg-brand-green
          grid place-content-center text-center text-brand-dark"
      >
        Проводите время в своё удовольствие
      </div>
    </div>
  </section>
        <section className="bg-brand-green py-32">
          <div className="px-4 md:px-6">
            <div className="bg-brand-dark text-white max-w-screen-xl m-auto p-5 md:p-16 rounded-3xl md:rounded-[3rem] grid grid-cols-3 gap-4">
              <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold row-start-1 col-span-3">
                <span className="px-2 md:px-4 bg-brand-green text-white rounded-xl">ПОЛУЧАЙ НАГРАДЫ</span>
              </h2>
              <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold row-start-2 col-span-3">
                ЗА ВЫПОЛНЕНИЕ
              </h2>
              <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold col-start-1 row-start-3 col-span-3 md:col-start-2">
              ЗАДАНИЙ НА САЙТЕ
              </h2>
              <p className="text-lg col-start-1 col-span-3 row-start-4 md:col-start-2 md:col-span-1 text-left">
              Наша гордость - это ваша активность 🔥
              </p>
              <div className="md:col-start-3 md:row-start-3 row-start-5 mt-1 col-start-2 md:row-span-2 justify-self-end aspect-square w-full h-full grid place-content-center">
                <a href="/login" aria-label="Войти" className="relative flex justify-center items-center">
                  <p className="absolute text-2xl uppercase">Войти</p>
                <svg
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
    className="px-5 md:px-6 max-w-screen-xl m-auto py-24 mt-24 grid md:grid-cols-3 gap-3"
    id="price"
  >
    <h2
      className="md:col-start-2 md:col-span-2 text-2xl md:text-6xl font-bold mb-5 md:mb-10"
    >
      <span className="px-4 rounded-lg bg-brand-green text-white">ВЫДЕЛЯЙСЯ</span>
      <span className="text-secondary-700"> СРЕДИ ДРУГИХ </span>
    </h2>
  
    <div className="p-8 bg-white rounded-xl grid grid-rows-[auto_1fr_auto]">
      <header>
        <h3 className="text-secondary-700 text-4xl md:text-5xl font-bold">База</h3>
        <p className="text-secondary-500 font-bold text-3xl md:text-4xl mt-2">
          бесплатно
        </p>
      </header>
  
      <ul className="list-disc list-inside text-lg mt-14">
        <li>Имеет базовый функционал</li>
        <li>Не может выбрать для себя эмодзи рядом с именем</li>
        <li>Не может поставить свою аватарку</li>
        <li>Не может писать комментарии</li>
        <li>Присутствует реклама</li>
      </ul>
    </div>
    <div className="p-8 bg-brand-dark rounded-xl grid grid-rows-[auto_1fr_auto]">
      <header>
        <h3 className="text-white text-4xl md:text-5xl font-bold">Про</h3>
        <p className="text-secondary-400 font-bold text-3xl md:text-4xl mt-2">
          290 ₽/месяц
        </p>
      </header>
  
      <ul className="list-disc list-inside text-secondary-50 text-lg mt-14">
        <li>Имеет базовый функционал</li>
        <li>Может выбрать для себя эмодзи рядом с именем</li>
        <li>Может писать комментарии</li>
        <li>Отключена реклама</li>
      </ul>
  
      <footer className="mt-8 flex justify-center md:justify-start">
        <button
          className="block w-fit rounded-full py-4 px-9 bg-white
            text-brand-dark font-bold hover:bg-brand-green hover:text-white transition-colors" 
        >
          ПОЛУЧИТЬ
        </button>
      </footer>
    </div>
    <div className="p-8 bg-gray-800 rounded-xl grid grid-rows-[auto_1fr_auto]">
      <header>
        <h3 className="text-white text-4xl md:text-5xl font-bold">Спонсор</h3>
        <p className="text-secondary-100 font-bold text-3xl md:text-4xl mt-2">
          490 ₽/месяц
        </p>
      </header>
  
      <ul className="list-disc list-inside text-secondary-50 text-lg mt-14">
        <li>Имеет весь функционал</li>
        <li>Может поставить свою аватарку</li>
        <li>Имеет особенную эмблему</li>
      </ul>
  
      <footer className="mt-8 flex justify-center md:justify-start">
        <span
          className="block w-fit rounded-full py-4 px-9 bg-white
            text-black font-bold hover:bg-brand-green hover:text-white transition-colors"
        >
          ПОЛУЧИТЬ
        </span>
      </footer>
    </div>
  </section>
    <section className="px-6 max-w-screen-xl m-auto py-24 md:mb-32" id="faq">
      <h2 className="text-4xl md:text-6xl font-bold mb-10">
        <span className="text-secondary-700"> ОСТАЛИСЬ </span>
        <span className="px-4 rounded-lg bg-brand-green text-white"> ВОПРОСЫ? </span>
      </h2>

      {questions.map((question, index) => (
        <details key={index} className="bg-white mt-3 rounded-xl">
          <summary
            className="text-secondary-600 px-10 py-6 font-bold text-xl cursor-pointer select-none flex justify-between items-center gap-4"
          >
            {question.title}
            <div className="arrow transition-transform rotate-180">
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
          <p className="pb-12 px-10 text-secondary-500">
            {question.answer}
          </p>
        </details>
      ))}
    </section>
        <Footer />
      </main>
    </Layout>
  );
}
