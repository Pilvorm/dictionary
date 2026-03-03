import SearchBar from "./components/searchBar";
import Word from "./[word]/page";

export default function Home() {
  return (
    <main className="mt-14 flex flex-col gap-7 md:gap-12">
      <SearchBar />
      <Word word="keyboard"/>
    </main>
  );
}
