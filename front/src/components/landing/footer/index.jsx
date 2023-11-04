const Footer = () => {
  return (
    <>
      <footer className="rounded-t-[2rem] bg-gray-800 text-white">
        <div className="m-auto max-w-screen-xl px-6 py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <h3 className="text-4xl font-bold md:col-span-2 md:text-7xl">
              МЫ НА{' '}
              <span className="rounded-xl bg-brand-green px-4">СВЯЗИ</span>
              <br />
              ЕСТЬ ВОПРОСЫ?
            </h3>

            <form>
              <input
                type="email"
                placeholder="Ваш электронный адрес"
                className="w-full border-b border-b-secondary-100
          bg-inherit py-3 text-lg placeholder:text-secondary-100"
              />
              <textarea
                placeholder="Ваше сообщение"
                className="mt-4 w-full resize-none
          overflow-hidden border-b border-b-secondary-100 bg-inherit py-3 text-lg placeholder:text-secondary-100"
                rows={1}
              />
            </form>
          </div>

          <div className="mb-14 mt-28 grid grid-cols-2 justify-between gap-4 md:flex">
            <div>
              <h4 className="text-3xl">Зарзар</h4>
              <p className="mt-2 whitespace-nowrap md:mt-4">
                Для поиска новых знакомств и увлекательного времяпровождение
              </p>
            </div>
            <div className="col-span-2 col-start-1 border-t border-t-white pt-3" />
            <div className="col-start-1 gap-4 text-sm md:flex md:flex-col md:text-base">
              <a href="/#faq" className="block md:inline">
                ЧАО
              </a>
              <a href="/#technologies" className="block md:inline">
                ОСОБЕННОСТИ
              </a>
            </div>
            <div className="col-start-2 gap-4 text-sm md:flex md:flex-col md:justify-end md:text-base">
              <p>КОНТАКТИ</p>
              <a href="mailto:support@zarzar.ru" className="hover:underline">
                support@zarzar.ru
              </a>
              <p>+7 (915) 497-55-84</p>
            </div>
          </div>
          <div className="justify-between border-t border-t-white pt-3">
            <span>Copyright 2023. Zarzar</span>
            <span />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
