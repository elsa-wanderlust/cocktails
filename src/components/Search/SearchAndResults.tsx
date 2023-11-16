"use client";

// import Checkboxes from "./Checkboxes";
import CocktailCard from "../CocktailCard";
import { CocktailProps } from "@/shapes";
import SearchField from "./SearchField";
// import { categories } from "@/data/cocktailsData";
// import { glasses } from "@/data/cocktailsData";
import { useState } from "react";

type searchTypeProps = {
  searchPage: string;
};

const SearchAndResults = ({ searchPage }: searchTypeProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CocktailProps[]>([]);

  return (
    <>
      <SearchField
        searchPage={searchPage}
        setIsLoading={setIsLoading}
        setData={setData}
      />
      {!isLoading && data.length !== 0 && (
        <div>
          <p className="italic my-2">
            We have found {data.length} cocktail{data.length > 1 && "s"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {data.map((item) => {
              return <CocktailCard key={item.idDrink} info={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchAndResults;
