export const Subscribers = () => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="flex items-center justify-between">
        <h4 className="text-xl text-gray-900 font-bold">Подписчики (13)</h4>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
        {[...Array(13).fill(1)].map((_, idx) => (
          <a
            key={idx}
            href="#"
            className="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600"
            title="View Profile"
          >
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/connections/connection1.jpg"
              className="w-16 rounded-full"
            />
            <p className="text-center font-bold text-sm mt-1">Diane Aguilar</p>
            <p className="text-xs text-gray-500 text-center">
              UI/UX Design at Upwork
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
