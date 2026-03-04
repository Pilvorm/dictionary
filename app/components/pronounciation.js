"use client";

const Pronounciation = ({ word, phonetic, audio }) => {
  const handlePlay = () => {
    if (!audio) return;

    const sound = new Audio(audio);
    sound.play();
  };

  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-[32px] md:text-5xl font-bold">{word}</h1>
        <p className="md:mt-3 text-lg md:text-2xl text-purple-500">
          {phonetic}
        </p>
      </div>

      <button
        type="button"
        onClick={handlePlay}
        disabled={!audio}
        className="audio-btn cursor-pointer flex items-center justify-center disabled:opacity-50 w-[48px] h-[48px] md:w-[75px] md:h-[75px] rounded-full bg-purple-500/25"
      >
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-[3px] md:ml-[6px] max-md:w-[13px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0V21L21 10.5L0 0Z"
            fill="#A445ED"
          />
        </svg>
      </button>
    </section>
  );
};

export default Pronounciation;
