"use client";

import Checkboxes from "./Checkboxes";
// import components
import CocktailCard from "../CocktailCard";
import SearchField from "./SearchField";
import { categories } from "@/data/cocktailsData";
// import data
import { glasses } from "@/data/cocktailsData";
import { useState } from "react";

type searchTypeProps = {
  searchPage: string;
};
type CocktailProps = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: string;
  strTags?: string; // elsa TBC
  strVideo?: string; // elsa TBC,
  strCategory: string;
  strIBA?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
  // strInstructionsES?: string;
  // strInstructionsDE?: string;
  // strInstructionsFR?: string;
  // strInstructionsIT?: string;
  // strInstructionsZH-HANS: null,
  // strInstructionsZH-HANT: null,
  strDrinkThumb?: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
  strImageSource?: string;
  strImageAttribution?: string;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
};

const SearchAndResults = ({ searchPage }: searchTypeProps) => {
  // declare states
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CocktailProps[]>([]);

  return (
    <>
      {searchPage === "s" || searchPage === "i" ? (
        <SearchField
          searchPage={searchPage}
          // isLoading={isLoading}
          setIsLoading={setIsLoading}
          setData={setData}
        />
      ) : (
        <Checkboxes
          data={searchPage === "g" ? glasses : categories}
          searchPage={searchPage}
          // isLoading={isLoading}
          setIsLoading={setIsLoading}
          setData={setData}
        />
      )}
      {!isLoading && data.length !== 0 && (
        <div>
          <p className="italic my-2">
            We have found {data.length} cocktail{data.length > 1 && "s"}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {data.map((item, index) => {
              return <CocktailCard key={index} info={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchAndResults;
