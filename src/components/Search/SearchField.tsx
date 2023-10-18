"use client";
import { useState } from "react";
// import routes
import fetchresults from "@/app/api/route";
// import components
import Cocktail from "../Cocktail";

type Input = {
  target: {
    value: string;
  };
};

type searchTypeProps = {
  searchPage: string;
};

const SearchField = async ({ searchPage }: searchTypeProps) => {
  // declare states
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  // declare functions
  const handleInput = async (input: Input) => {
    if (input.target) {
      setInput(input.target.value);
      if (input.target.value.length > 2) {
        setIsLoading(true);
        const cocktailsFound = await fetchresults(
          input.target.value,
          searchPage
        );
        if (cocktailsFound) {
          setData(cocktailsFound);
          setIsLoading(false);
        }
      }
    }
  };

  // declare variables
  const searchKeyWords = {
    s: "the name of a cocktail",
    i: "the name of an ingredient",
    c: "a category cocktail",
    g: "a type of cocktail glass",
  };

  return (
    <div className="h-80%">
      <input
        type="text"
        placeholder="start typing"
        onChange={handleInput}
        value={input}
      />
      {isLoading && <p>looking for awesome cocktails to match your search </p>}

      {!isLoading && data.length && (
        <div>
          <p>
            we have found {data.length} cocktails matching your search '{input}'
          </p>
          {data.map((item, index) => {
            return <Cocktail key={index} info={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchField;
