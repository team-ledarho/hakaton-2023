export const Statistic = () => {
  return (
    <div className="mt-4 flex-1 rounded-lg bg-white p-8 shadow-xl">
      <h4 className="text-xl font-bold text-gray-900">Cтатистика</h4>

      <div className="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-300 bg-gray-100 px-6 py-6 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-indigo-600">Вложения</span>
            <span className="cursor-default rounded-lg bg-gray-200 px-2 py-1 text-xs text-gray-500 transition duration-200 hover:bg-gray-500 hover:text-gray-200">
              7 days
            </span>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <svg
                className="h-12 w-12 rounded-full border border-indigo-600 bg-indigo-400 bg-opacity-20 p-2.5 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-end">
                <span className="text-2xl font-bold 2xl:text-3xl">$8,141</span>
                <div className="mb-1 ml-2 flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                  <span className="ml-0.5 text-sm font-bold text-gray-500">
                    3%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-300 bg-gray-100 px-6 py-6 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-green-600">
              Новые тусовки
            </span>
            <span className="cursor-default rounded-lg bg-gray-200 px-2 py-1 text-xs text-gray-500 transition duration-200 hover:bg-gray-500 hover:text-gray-200">
              7 days
            </span>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <svg
                className="h-12 w-12 rounded-full border border-green-600 bg-green-400 bg-opacity-20 p-2.5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-end">
                <span className="text-2xl font-bold 2xl:text-3xl">217</span>
                <div className="mb-1 ml-2 flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                  <span className="ml-0.5 text-sm font-bold text-gray-500">
                    5%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-gray-300 bg-gray-100 px-6 py-6 shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-blue-600">Подписчики</span>
            <span className="cursor-default rounded-lg bg-gray-200 px-2 py-1 text-xs text-gray-500 transition duration-200 hover:bg-gray-500 hover:text-gray-200">
              7 days
            </span>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div>
              <svg
                className="h-12 w-12 rounded-full border border-blue-600 bg-blue-400 bg-opacity-20 p-2.5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-end">
                <span className="text-2xl font-bold 2xl:text-3xl">54</span>
                <div className="mb-1 ml-2 flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                  <span className="ml-0.5 text-sm font-bold text-gray-500">
                    7%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
