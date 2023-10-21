import Cocktail from "./Cocktail";
import CocktailDetailed from "./CocktailDetailed";

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

const DailyCocktail = async () => {
  const cocktailOfTheDay = await randomCocktail();
  return (
    <div>
      <CocktailDetailed info={cocktailOfTheDay} pageOrigin="h" />
    </div>
  );
};

export default DailyCocktail;
