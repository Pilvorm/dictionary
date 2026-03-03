import Image from "next/image";
import Play from "@/public/assets/images/icon-play.svg";

const Pronounciation = ({word, phonetic}) => {
  return (
    <section className="flex items-center justify-between">
      <div>
        <h1 className="text-[32px] md:text-5xl font-bold">{word}</h1>
        <p className="md:mt-3 text-lg md:text-2xl text-purple-500">
          {phonetic}
        </p>
      </div>
      <button type="button" className="cursor-pointer flex items-center">
        <Image src={Play} alt="Play icon" className="w-[48px] md:w-[75px]" />
      </button>
    </section>
  );
};

export default Pronounciation;
