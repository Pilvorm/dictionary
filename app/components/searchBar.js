import Image from "next/image";
import Search from "@/public/assets/images/icon-search.svg";

const SearchBar = () => {
  return <div className="w-full px-6 py-5 bg-neutral-100 rounded-2xl flex items-center justify-between">
    <input className="search-input w-9/10" placeholder="Search a word"/>
    <Image src={Search} className="" width="16" alt="Search icon" />
  </div>;
};

export default SearchBar;
