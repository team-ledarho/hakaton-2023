const Footer = () => {
  return (
    <>
<footer className="rounded-t-[2rem] bg-gray-800 text-white">
  <div className="px-6 max-w-screen-xl m-auto py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <h3 className="md:col-span-2 font-bold text-4xl md:text-7xl">
        МЫ НА <span className="rounded-xl px-4 bg-brand-green">СВЯЗИ</span
        >
        <br />ЕСТЬ ВОПРОСЫ?
      </h3>

      <form>
        <input
          type="email"
          placeholder="Ваш электронный адрес"
          className="border-b border-b-secondary-100 placeholder:text-secondary-100
          bg-inherit py-3 w-full text-lg"
        />
        <textarea

          placeholder="Ваше сообщение"
          className="border-b border-b-secondary-100 placeholder:text-secondary-100
          bg-inherit py-3 w-full text-lg mt-4 overflow-hidden resize-none"
          rows={1}
        />
      </form>
    </div>

    <div className="mt-28 mb-14 md:flex justify-between grid grid-cols-2 gap-4">
      <div>
        <h4 className="text-3xl">Зарзар</h4>
        <p className="mt-2 md:mt-4 whitespace-nowrap">Для поиска новых знакомств и увлекательного времяпровождение</p>
      </div>
      <div className="col-start-1 col-span-2 border-t border-t-white pt-3" />
      <div className="col-start-1 text-sm md:text-base md:flex md:flex-col gap-4">
        <a href="/#faq" className="block md:inline">ЧАО</a>
        <a href="/#technologies" className="block md:inline">ОСОБЕННОСТИ</a>
      </div>
      <div
        className="col-start-2 text-sm md:text-base md:flex md:flex-col gap-4 md:justify-end"
      >
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
  )
}

export default Footer;