import Cocktail from "./Cocktail";
import handleIngredients from "@/utils/handleIngredients";

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
      <h1>COCKTAIL OF THE DAY</h1>
      <Cocktail info={cocktailOfTheDay} />
    </div>
  );
};

export default DailyCocktail;
