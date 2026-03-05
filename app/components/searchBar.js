"use client";

import Image from "next/image";
import Search from "@/public/assets/images/icon-search.svg";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";


const SearchBar = () => {
  const params = useParams();
  const [query, setQuery] = useState(params.word || "");
  const [emptyQuery, setEmptyQuery] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setEmptyQuery(true);
      return;
    }

    router.push(`/${query.toLowerCase().trim()}`);
  };

  useEffect(() => {
    if (query.length > 0) {
      setEmptyQuery(false);
    }
  }, [query]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`mt-14 w-full px-6 py-5 bg-neutral-100 rounded-2xl 
                flex items-center justify-between
                dark:bg-neutral-900
                border-1 border-transparent
                ${emptyQuery ? "focus-within:border-red-500" : "focus-within:border-purple-500"}
                transition duration-100 ease-out`}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder={`${emptyQuery ? "Whoops, can't be empty..." : "Search for any word..."}`}
          className="w-9/10 text-base md:text-xl font-semibold outline-none bg-transparent placeholder:text-neutral-800/25 dark:placeholder:text-neutral-0/25"
        />
        <button type="submit" className="cursor-pointer">
    <Image src={Search} width="16" alt="Search icon" />
  </button>
      </form>
      {/* <AnimatePresence>
        {emptyQuery && (
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="mt-1 text-md text-red-500"
          >
            Whoops, can't be empty...
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
};

export default SearchBar;
