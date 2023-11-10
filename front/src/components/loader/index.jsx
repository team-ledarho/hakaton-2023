export const Loader = () => {
  return (
    <div class="flex min-h-screen items-center justify-center">
      <button
        type="button"
        class="h-max w-max rounded-lg bg-green-600 font-bold text-white duration-[500ms,800ms] hover:cursor-not-allowed hover:bg-green-700"
        disabled
      >
        <div class="m-[10px] flex items-center justify-center">
          <div class="h-5 w-5 animate-spin rounded-full border-4 border-solid border-white border-t-transparent"></div>
          <div class="ml-2">Loading... </div>
        </div>
      </button>
    </div>
  );
};
