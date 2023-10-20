import Cocktail from "./Cocktail";
import experimentIcon from "../data/icons";

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
const image = experimentIcon;

const DailyCocktail = async () => {
  const cocktailOfTheDay = await randomCocktail();
  return (
    <div>
      <h1>COCKTAIL OF THE DAY</h1>
      {/* <img src={image} alt="" width="100%" height="100%" /> */}
      <Cocktail info={cocktailOfTheDay} searchPage="h" />
    </div>
  );
};

export default DailyCocktail;
