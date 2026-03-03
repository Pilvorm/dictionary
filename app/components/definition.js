
const Definition = ({header, meaningList}) => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex items-center gap-5">
        <h2 className="text-lg md:text-2xl italic font-semibold">{header}</h2>
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
            A device with keys of a musical keyboard, used to control electronic
            sound-producing devices which may be built into or separate from the
            keyboard device.
          </li>
        </ul>
      </div>

      <div className="flex gap-6 text-base md:text-xl">
        <h3 className="text-neutral-500">Synonyms</h3>
        <p className="text-purple-500 font-semibold">electronic keyboard</p>
      </div>
    </section>
  );
};

export default Definition;
