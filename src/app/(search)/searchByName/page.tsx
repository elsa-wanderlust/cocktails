import Image from "next/image";
import SearchAndResults from "@/components/Search/SearchAndResults";
import bgImage from "../../../images/bg_image1.jpg";

const SearchByName = () => {
  return (
    <div>
      <SearchAndResults searchPage="s" />
    </div>
  );
};

export default SearchByName;
