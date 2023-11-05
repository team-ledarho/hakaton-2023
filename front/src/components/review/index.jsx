const Review = () => {
  return (
    <>
      <div className="relative m-5 h-56 w-96 select-none rounded-lg border border-gray-100 p-6 shadow-lg">
        <p className="text-xl font-black">Оставьте отзыв</p>
        <p className="mt-3">Вам понравилось данное мероприятие?</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-0 top-0 m-5 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="mt-3 flex justify-between space-x-1">
          <div className="flex h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-amber-200 text-xl font-bold hover:bg-amber-400">
            😤
          </div>
          <div className="flex h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-amber-200 text-xl font-bold hover:bg-amber-400">
            😒
          </div>
          <div className="flex h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-amber-200 text-xl font-bold hover:bg-amber-400">
            😐
          </div>
          <div className="flex h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-amber-200 text-xl font-bold hover:bg-amber-400">
            🙂
          </div>
          <div className="flex h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-amber-200 text-xl font-bold hover:bg-amber-400">
            😀
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
