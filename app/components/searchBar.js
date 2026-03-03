import Link from "next/link";
import Image from "next/image";
import Search from "@/public/assets/images/icon-search.svg";
import Play from "@/public/assets/images/icon-play.svg";
import NewWindow from "@/public/assets/images/icon-new-window.svg";

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-7 md:gap-12">
      {/* Search Bar */}
      <div className="w-full px-6 py-5 bg-neutral-100 rounded-2xl flex items-center justify-between">
        <input
          className="search-input w-9/10 text-base md:text-xl font-semibold outline-none"
          placeholder="Search a word"
        />
        <Image src={Search} className="" width="16" alt="Search icon" />
      </div>

      {/* Pronounciation */}
      <section className="flex items-center justify-between">
        <div>
          <h1 className="text-[32px] md:text-5xl font-bold">keyboard</h1>
          <p className="md:mt-3 text-lg md:text-2xl text-purple-500">
            /ˈkiːbɔːd/
          </p>
        </div>
        <button type="button" className="cursor-pointer flex items-center">
          <Image src={Play} alt="Play icon" className="w-[48px] md:w-[75px]" />
        </button>
      </section>

      {/* Noun */}
      <section className="flex flex-col gap-10">
        <div className="flex items-center gap-5">
          <h2 className="text-lg md:text-2xl italic font-semibold">noun</h2>
          <div className="h-[1] w-full bg-neutral-200"> </div>
        </div>

        <div>
          <h3 className="mb-6 text-xl text-neutral-500">Meaning</h3>
          <ul className="meaning-list text-[15px] md:text-lg">
            <li>
              (etc.) A set of keys used to operate a typewriter, computer etc.
            </li>
            <li>
              A component of many instruments including the piano, organ, and
              harpsichord consisting of usually black and white keys that cause
              different tones to be produced when struck.
            </li>
            <li>
              A device with keys of a musical keyboard, used to control
              electronic sound-producing devices which may be built into or
              separate from the keyboard device.
            </li>
          </ul>
        </div>

        <div className="flex gap-6 text-base md:text-xl">
          <h3 className="text-neutral-500">Synonyms</h3>
          <p className="text-purple-500 font-semibold">
            electronic keyboard
          </p>
        </div>
      </section>

      {/* Verb */}
      <section className="flex flex-col gap-10">
        <div className="flex items-center gap-5">
          <h2 className="text-lg md:text-2xl italic font-semibold">verb</h2>
          <div className="h-[1] w-full bg-neutral-200"> </div>
        </div>

        <div>
          <h3 className="mb-6 text-base md:text-xl text-neutral-500">Meaning</h3>
          <ul className="meaning-list text-[15px] md:text-lg">
            <li className="">
              To type on a computer keyboard.
              <p className="mt-3 text-neutral-500">
                "Keyboarding is part of this job I hate the most."
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="">
        <div className="mb-5 h-[1] w-full bg-neutral-200"> </div>
        <div className="flex max-md:flex-col max-md:items-start items-center gap-2 md:gap-6 text-sm">
          <div className="text-neutral-500">Source</div>
          <Link
            href={"https://en.wiktionary.org/wiki/keyboard"}
            className="flex underline"
          >
            https://en.wiktionary.org/wiki/keyboard
            <Image
              src={NewWindow}
              width="12"
              alt="Open in new window"
              className="ml-2"
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
