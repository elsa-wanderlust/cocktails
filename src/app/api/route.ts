// the props searchType will a string:
// 's' - if search by name
// 'i' - if search by ingredient
// 'c' - if search by category
// 'g' - if search by glass

import { serialize } from "v8";

export default async function fetchresults(req: string, searchType: string) {
  try {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/${
        searchType === "s" ? "search" : "filter"
      }.php?${searchType}=${req}`
    );
    const data = await res.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
  }
}

const searchType = ["n", "i", "c", "g"];

// Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// Search by ingredient
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin

// Filter by Category
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

// Filter by Glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute
