// import components
import Ingredient from "./Ingredients";
// import function
import handleIngredients from "@/utils/handleIngredients";

type CocktailProps = {
  info: {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate?: string;
    strTags?: string; // elsa TBC
    strVideo?: string; // elsa TBC,
    strCategory: string;
    strIBA?: string;
    strAlcoholic?: string;
    strGlass?: string;
    strInstructions?: string;
    // strInstructionsES?: string;
    // strInstructionsDE?: string;
    // strInstructionsFR?: string;
    // strInstructionsIT?: string;
    // strInstructionsZH-HANS: null,
    // strInstructionsZH-HANT: null,
    strDrinkThumb?: string;
    strIngredient1?: string;
    strIngredient2?: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strIngredient9?: string;
    strIngredient10?: string;
    strIngredient11?: string;
    strIngredient12?: string;
    strIngredient13?: string;
    strIngredient14?: string;
    strIngredient15?: string;
    strMeasure1?: string;
    strMeasure2?: string;
    strMeasure3?: string;
    strMeasure4?: string;
    strMeasure5?: string;
    strMeasure6?: string;
    strMeasure7?: string;
    strMeasure8?: string;
    strMeasure9?: string;
    strMeasure10?: string;
    strMeasure11?: string;
    strMeasure12?: string;
    strMeasure13?: string;
    strMeasure14?: string;
    strMeasure15?: string;
    strImageSource?: string;
    strImageAttribution?: string;
    strCreativeCommonsConfirmed?: string;
    dateModified?: string;
  };
};

const Cocktail = ({ info }: CocktailProps) => {
  const ingredientsList = handleIngredients(info);
  return (
    <div>
      <h1>{info.strDrink}</h1>
      {info.strDrinkThumb && (
        <img
          src={info.strDrinkThumb}
          alt={`image of a cocktail: ${info.strDrink}`}
          height="100px"
          width="100px"
        />
      )}
      {ingredientsList.map((item, index) => {
        return <Ingredient key={index} info={item} />;
      })}
    </div>
  );
};

export default Cocktail;
