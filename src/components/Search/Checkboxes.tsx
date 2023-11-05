// "use client";
import { useEffect, useState } from "react";

// import routes
import { fetchResults } from "@/app/api/cocktailRoutes";

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

type CheckboxesProps = {
  data: string[];
  searchPage: string;
  // isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<CocktailProps[]>>;
};
type Select = {
  target: {
    name: string;
  };
};

const Checkboxes = ({
  data,
  searchPage,
  // isLoading,
  setIsLoading,
  setData,
}: CheckboxesProps) => {
  const [selection, setSelection] = useState("");

  useEffect(() => {
    const getPreviousSearch = async () => {
      const search = localStorage.getItem(`search${searchPage}`) || "";
      setSelection(search);
      const cocktailsFound = await fetchResults(search, searchPage);
      if (cocktailsFound) {
        setData(cocktailsFound);
        setIsLoading(false);
      }
    };
    getPreviousSearch();
  }, [searchPage, setData, setIsLoading]);

  const handleSelect = async (select: Select) => {
    setSelection(select.target.name);
    localStorage.setItem(`search${searchPage}`, select.target.name);
    setIsLoading(true);
    const searchGlassFormatted = select.target.name.replace(" ", "_");
    const cocktailsFound = await fetchResults(searchGlassFormatted, searchPage);
    if (cocktailsFound) {
      setData(cocktailsFound);
      setIsLoading(false);
    }
  };

  return (
    <fieldset className="">
      <h2>
        Select a
        {searchPage === "c"
          ? " category of cocktail"
          : " type of cocktail glass"}
      </h2>
      <div className="flex flex-wrap gap-10 pb-4">
        {data.map((glass) => (
          <div key={glass} className="relative flex items-start pb-2 w-1/6">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label
                htmlFor={glass}
                className="select-none font-medium text-gray-900"
              >
                {glass}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={glass}
                name={glass}
                type="checkbox"
                className="h-4 w-4"
                onChange={handleSelect}
                checked={selection === glass ? true : false}
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Checkboxes;
