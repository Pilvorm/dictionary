import Pronounciation from "../components/pronounciation";
import Source from "../components/source";
import Loading from "../[word]/loading";

const WordContent = async ({ word }) => {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    {
      next: { revalidate: 3600 }, // cache 1 hour
    },
  );

  if (!res.ok) {
    const notFound = await res.json();

    return (
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-6xl">😕</div>
        <h1 className="mt-12 text-lg font-bold">{notFound.title}</h1>
        <p className="mt-5 text-neutral-500">
          {notFound.message} {notFound.resolution}
        </p>
      </div>
    );
  }

  const data = await res.json();
  const entry = data[0];

  const phonetics = entry.phonetics || [];

  // Prioritise US audio
  let audio = phonetics.find(
    (p) => p.audio && p.audio.includes("-us.mp3"),
  )?.audio;

  // UK audio fallback
  if (!audio) {
    audio = phonetics.find(
      (p) => p.audio && p.audio.includes("-uk.mp3"),
    )?.audio;
  }

  // First available
  if (!audio) {
    audio = phonetics.find((p) => p.audio)?.audio || null;
  }

  return (
    <div className="flex flex-col gap-7 md:gap-12">
      {/* Pronunciation */}
      <Pronounciation
        word={entry.word}
        phonetic={entry.phonetic}
        audio={audio}
      />

      <Loading />

      {entry.meanings.map((meaning, index) => (
        <section key={index} className="flex flex-col gap-10">
          {/* Part of Speech (noun/verb) */}
          <div className="flex items-center gap-5">
            <h2 className="text-lg md:text-2xl italic font-semibold">
              {meaning.partOfSpeech}
            </h2>
            <div className="h-[1px] w-full bg-neutral-200" />
          </div>

          {/* Meanings */}
          <div>
            <h3 className="mb-6 text-xl text-neutral-500">Meaning</h3>

            <ul className="meaning-list text-[15px] md:text-lg space-y-4">
              {meaning.definitions.map((def, i) => (
                <li key={i}>
                  {def.definition}

                  {/* Example (only render if exists) */}
                  {def.example && (
                    <p className="mt-3 text-neutral-500">"{def.example}"</p>
                  )}

                  {/* Definition-level synonyms */}
                  {def.synonyms?.length > 0 && (
                    <p className="mt-2 text-purple-500 font-medium">
                      Synonyms: {def.synonyms.join(", ")}
                    </p>
                  )}

                  {/* Definition-level antonyms */}
                  {def.antonyms?.length > 0 && (
                    <p className="mt-2 text-red-500 font-medium">
                      Antonyms: {def.antonyms.join(", ")}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Synonyms */}
          {meaning.synonyms?.length > 0 && (
            <div className="flex gap-6 text-base md:text-xl">
              <h3 className="text-neutral-500">Synonyms</h3>
              <p className="text-purple-500 font-semibold">
                {meaning.synonyms.join(", ")}
              </p>
            </div>
          )}

          {/* Antonyms */}
          {meaning.antonyms?.length > 0 && (
            <div className="flex gap-6 text-base md:text-xl">
              <h3 className="text-neutral-500">Antonyms</h3>
              <p className="text-red-500 font-semibold">
                {meaning.antonyms.join(", ")}
              </p>
            </div>
          )}
        </section>
      ))}

      <Source url={entry.sourceUrls?.[0]} />
    </div>
  );
};

export default WordContent;
