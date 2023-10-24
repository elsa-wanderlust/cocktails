// ROUTE TO SEARCH FOR COCKTAILS LIST
// req = input/filter
// searchType = 's' if search by name, 'i' if by ingredient, 'c' if by category and 'g' by glass

export async function fetchresults(req: string, searchType: string) {
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

// ROUTE TO GET ALL COCKTAIL DETAILS
// req = drink Id
export async function cocktailDetails(req: string) {
  try {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req}`
    );
    const data = await res.json();
    return data.drinks[0];
  } catch (error) {
    console.log(error);
  }
}
