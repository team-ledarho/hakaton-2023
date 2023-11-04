export const Subscribers = () => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-xl">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-bold text-gray-900">Подписчики (13)</h4>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
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
            <p className="mt-1 text-center text-sm font-bold">Diane Aguilar</p>
            <p className="text-center text-xs text-gray-500">
              UI/UX Design at Upwork
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};
