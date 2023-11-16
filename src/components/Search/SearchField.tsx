import { useRouter, useSearchParams } from "next/navigation";

import { CocktailProps } from "@/shapes";
import { fetchResults } from "@/app/api/cocktailRoutes";
import { useEffect } from "react";

type Input = {
  target: {
    value: string;
  };
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
        if (input && input.length > 2) {
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
    <div className="h-80% flex gap-2 flex-col sm:flex-row sm:gap-10 items-center">
      <h2>Search a cocktail by {searchPage === "s" ? "name" : "ingredient"}</h2>
      <input
        type="text"
        placeholder={`type a cocktail ${
          searchPage === "s" ? "name" : "ingredient"
        }`}
        className="block rounded-md border-0 p-5 py-1.5 sm:w-1/3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:border-green-700 focus:ring-green-700 text-sm sm:leading-6"
        onChange={handleInput}
        value={input ? input : ""}
      />
    </div>
  );
};
export default SearchField;
