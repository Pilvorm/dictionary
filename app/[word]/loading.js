const Loading = () => {
  return (
    <div className="flex flex-col gap-7 md:gap-12 animate-pulse">
      <div className="flex items-center justify-between">
        <div>
          <div className="h-12 w-56 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          <div className="mt-3 h-8 w-36 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
        </div>

        <div className="w-[48px] h-[48px] md:w-[75px] md:h-[75px] rounded-full bg-neutral-200 dark:bg-neutral-800 "></div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-5">
          <div className="h-8 w-24 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
          <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div>
          <div className="mb-6">Meaning</div>

          <ul className="meaning-list">
            <li className="md:mt-3 h-8 w-full bg-neutral-200 dark:bg-neutral-800 rounded"></li>
          </ul>
        </div>

        <div className="flex items-center gap-6 text-base md:text-xl">
          <div className="text-neutral-500">Synonyms</div>
          <div className="h-8 w-full bg-neutral-200 dark:bg-neutral-800 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
