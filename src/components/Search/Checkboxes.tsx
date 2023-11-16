import { useEffect, useState } from "react";

import { CocktailProps } from "@/shapes";
import { fetchResults } from "@/app/api/cocktailRoutes";

type CheckboxesProps = {
  data: string[];
  searchPage: string;
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
        {data.map((item) => (
          <div key={item} className="relative flex items-start pb-2 w-1/6">
            <div className="min-w-0 flex-1 text-sm leading-6">
              <label
                htmlFor={item}
                className="select-none font-medium text-gray-900"
              >
                {item}
              </label>
            </div>
            <div className="ml-3 flex h-6 items-center">
              <input
                id={item}
                name={item}
                type="checkbox"
                className="h-4 w-4"
                onChange={handleSelect}
                checked={selection === item ? true : false}
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
  );
};

export default Checkboxes;
