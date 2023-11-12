import CocktailDetailed from "./CocktailDetailed";

const randomCocktail = async () => {
  console.log("called");
  try {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
      { cache: "no-store" }
    );
    const data = await res.json();
    return data.drinks[0];
  } catch (error) {
    console.log(error);
  }
};

export const RandomCocktail = async () => {
  const cocktailOfTheDay = await randomCocktail();
  return (
    <div>
      {/* <div className="flex justify-center">
        <h4 className="border-double border-black border-y-2 p-1 w-fit italic m-0.5 z-10">
          ~ a random cocktail picked for you ~
        </h4>
      </div> */}
      <CocktailDetailed info={cocktailOfTheDay} pageOrigin="h" />
    </div>
  );
};
