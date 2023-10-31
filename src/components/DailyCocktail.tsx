// import components
import CocktailDetailed from "./CocktailDetailed";
// ELSA ESSAI
import { isConnected } from "@/utils/isConnected";

const randomCocktail = async () => {
  try {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
    const data = await res.json();
    return data.drinks[0];
  } catch (error) {
    console.log(error);
  }
};
const isConnectedTrue = isConnected();
console.log("-----isConnected", isConnectedTrue);

const DailyCocktail = async () => {
  const cocktailOfTheDay = await randomCocktail();
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="border-double border-black border-y-2 p-2 w-fit italic m-0.5">
          ~ Cocktail of the day ~
        </h2>
      </div>
      <CocktailDetailed info={cocktailOfTheDay} pageOrigin="h" />
    </div>
  );
};

export default DailyCocktail;
