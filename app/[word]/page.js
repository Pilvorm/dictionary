import WordContent from "../components/wordContent";

const WordPage = async ({ params }) => {
  const { word } = await params;
  return <WordContent word={word} />;
};

export default WordPage;
