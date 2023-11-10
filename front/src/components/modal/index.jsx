import ReactDOM from 'react-dom';

const portal = document.getElementById('portal');

export const Modal = ({ open, onOpen }) => {
  return ReactDOM.createPortal(
    open && (
      <div className="fixed z-10 h-[100vh] w-[100vw] bg-gray-900/50 transition-all ease-in-out">
        <div className="mx-auto my-10 max-w-lg rounded-xl border-[1px] border-gray-200 bg-white p-2 shadow transition-all duration-150 ease-linear hover:shadow-lg">
          <div className="relative p-6">
            <a href="#" className="absolute right-1.5 top-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-4 w-4 cursor-pointer fill-current text-slate-500 hover:text-slate-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
            <h1 className="text-3xl font-bold">Потвердите действие</h1>
            <p className="my-4 text-sm text-gray-500">
              Вы хотите добавить событие в Google Календарь?
            </p>
            <div className="flex flex-row justify-evenly space-x-2">
              <a
                onClick={onOpen}
                href="#"
                className="w-full rounded-lg border border-green-600 bg-green-600 py-3 text-center text-sm font-medium text-white transition duration-150 ease-linear hover:bg-green-700"
              >
                Добавить
              </a>
              <a
                onClick={onOpen}
                href="#"
                className="w-full rounded-lg border border-gray-200 bg-white py-3 text-center text-sm text-gray-500 transition duration-150 ease-linear hover:bg-gray-100"
              >
                Отменить
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    portal,
  );
};
