import Image from "next/image";
import SearchAndResults from "@/components/Search/SearchAndResults";
import bgImage from "../../../images/bg_image1.jpg";
import DefaultBackground from "@/components/DefaultBackground";

const SearchByName = () => {
  return (
    <div>
      <DefaultBackground />
      <SearchAndResults searchPage="s" />
    </div>
  );
};

export default SearchByName;
