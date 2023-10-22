// ROUTE TO SEARCH FOR COCKTAILS LIST
// req = 's' if search by name, 'i' if by ingredient, 'c' if by category and 'g' by glass

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
