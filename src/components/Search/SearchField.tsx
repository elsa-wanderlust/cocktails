import { useRouter, useSearchParams } from "next/navigation";

import { fetchResults } from "@/app/api/cocktailRoutes";
import { useEffect } from "react";

type Input = {
  target: {
    value: string;
  };
};
type CocktailProps = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: string;
  strTags?: string;
  strVideo?: string;
  strCategory: string;
  strIBA?: string;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string;
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

type SearchFieldProps = {
  searchPage: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setData: React.Dispatch<React.SetStateAction<CocktailProps[]>>;
};

const SearchField = ({
  searchPage,
  setIsLoading,
  setData,
}: SearchFieldProps) => {
  const searchParams = useSearchParams();
  const input = searchParams.get(searchPage);
  const router = useRouter();

  useEffect(() => {
    const searchCocktails = async () => {
      try {
        if (input) {
          setIsLoading(true);
          const cocktailsFound = await fetchResults(input, searchPage);
          if (cocktailsFound) {
            setData(cocktailsFound);
            setIsLoading(false);
          } else {
            throw "there are no cocktails matching you search";
          }
        } else if (input === "") {
          setData([]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    searchCocktails();
  }, [input, searchPage, setData, setIsLoading]);

  const handleInput = async (input: Input) => {
    router.push(`?${searchPage}=${input.target.value}`), { scroll: false };
  };

  return (
    <div className="h-80% flex gap-10">
      <h2>Search a cocktail by {searchPage === "s" ? "name" : "ingredient"}</h2>
      <input
        type="text"
        placeholder={`type a cocktail ${
          searchPage === "s" ? "name" : "ingredient"
        }`}
        className="block rounded-md border-0 p-5 py-1.5 w-1/3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-green-700 focus:ring-green-700 sm:text-sm sm:leading-6"
        onChange={handleInput}
        value={input ? input : ""}
      />
    </div>
  );
};
export default SearchField;
