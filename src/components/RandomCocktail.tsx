// import components
import CocktailDetailed from "./CocktailDetailed";

const randomCocktail = async () => {
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
      <div className="flex justify-center">
        <h2 className="border-double border-black border-y-2 p-2 w-fit italic m-0.5">
          ~ a random cocktail picked for you ~
        </h2>
      </div>
      <CocktailDetailed info={cocktailOfTheDay} pageOrigin="h" />
    </div>
  );
};
