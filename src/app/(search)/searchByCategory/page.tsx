import SearchAndResults from "@/components/Search/SearchAndResults";
import DefaultBackground from "@/components/DefaultBackground";

const SearchByCategory = () => {
  return (
    <div>
      <DefaultBackground />
      <SearchAndResults searchPage="c" />
    </div>
  );
};

export default SearchByCategory;
