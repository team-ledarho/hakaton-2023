import { Layout } from '@components/layout';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="mx-auto w-full  py-8 lg:w-8/12">
        <div className="bg-blueGray-100 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 shadow-lg">
          <div className="mb-0 rounded-t bg-white px-6 py-6">
            <div className="flex justify-between text-center">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Мой аккаунт
              </h6>

              <button
                onClick={() => navigate(-1)}
                className="mr-1 rounded bg-blue-600 px-4 py-2 text-xs uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-blue-700 hover:shadow-md focus:outline-none active:bg-pink-600"
                type="button"
              >
                Вернуться
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form>
              <h6 className="text-blueGray-400 mb-6 mt-3 text-sm font-bold uppercase">
                Информация пользователя
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative mb-3 w-full">
                    <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Имя пользователя
                    </label>
                    <input
                      type="text"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative mb-3 w-full">
                    <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Почта
                    </label>
                    <input
                      type="email"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative mb-3 w-full">
                    <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative mb-3 w-full">
                    <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Фамилия
                    </label>
                    <input
                      type="text"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-b-1 border-blueGray-300 mt-6" />

              <h6 className="text-blueGray-400 mb-6 mt-3 text-sm font-bold uppercase">
                Контактная информафия
              </h6>
              <div className="flex flex-wrap">
                <div className="lg:w-12/12 w-full px-4">
                  <div className="relative mb-3 w-full">
                    <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Адресс
                    </label>
                    <input
                      type="text"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div className="relative mb-3 w-full">
                    <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Город
                    </label>
                    <input
                      type="email"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div className="relative mb-3 w-full">
                    <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Страна
                    </label>
                    <input
                      type="text"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div className="relative mb-3 w-full">
                    <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
                      Почтовый индекс
                    </label>
                    <input
                      type="text"
                      className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </div>
              <button
                className="mr-1 rounded bg-blue-600 px-4 py-2 text-xs uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:bg-blue-700 hover:shadow-md focus:outline-none active:bg-pink-600"
                type="button"
              >
                Cохранить
              </button>
            </form>
          </div>
        </div>

        <footer className="relative  mt-2 pb-6 pt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="mx-auto w-full px-4 text-center md:w-6/12">
                <div className="py-1 text-sm font-semibold text-gray-500">
                  Все данные пользователей зашифрованы
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};
