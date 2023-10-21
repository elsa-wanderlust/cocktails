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
  pageOrigin: string;
};

const CocktailDetailed = ({ info, pageOrigin }: CocktailProps) => {
  const ingredientsList = handleIngredients(info);
  return (
    <div className="flex flex-col">
      <h1 className="justify-center">
        {pageOrigin === "h" && "Cocktail of the day: "}
        {info.strDrink}
      </h1>
      <div className="flex gap-8">
        <div className="w-1/3">
          {info.strDrinkThumb && (
            <div className="border-black border bg-black p-1">
              <img
                src={info.strDrinkThumb}
                alt={`image of a cocktail: ${info.strDrink}`}
                height="100%"
                width="100%"
                style={{ borderRadius: "10%" }}
              />
            </div>
          )}
        </div>
        <div className="w-2/3">
          <h4>Category</h4>
          {info.strCategory}
          <h4>Ingredients</h4>
          <div className="list-disc list-inside	flex flex-wrap gap-3">
            {ingredientsList.map((item, index) => {
              return (
                <div className="w-60" key={index}>
                  <li>{item}</li>
                </div>
              );
            })}
          </div>
          <h4>Instructions</h4>
          {info.strInstructions}
          <div className="flex gap-24">
            <div>
              <h4>Type of glass</h4>
              {info.strGlass}
            </div>
            <div>
              <h4>Alcohol content</h4>
              {info.strAlcoholic}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetailed;
