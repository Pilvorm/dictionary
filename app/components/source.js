import Link from "next/link";
import Image from "next/image";
import NewWindow from "@/public/assets/images/icon-new-window.svg";

const Source = ({ url }) => {
  return (
    <section className="">
      <div className="mb-5 h-[1] w-full bg-neutral-200"> </div>
      <div className="flex max-md:flex-col max-md:items-start items-center gap-2 md:gap-6 text-sm">
        <div className="text-neutral-500">Source</div>
        <a href={url} target="_blank" className="flex underline">
          {url}
          <Image
            src={NewWindow}
            width="12"
            alt="Open in new window"
            className="ml-2"
          />
        </a>
      </div>
    </section>
  );
};

export default Source;
