import FavortiesIcons from "./FavoritesIcons";
import Image from "next/image";
import handleIngredients from "@/utils/handleIngredients";

type CocktailProps = {
  info: {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate?: string;
    strTags?: string;
    strVideo?: string;
    strCategory: string;
    strIBA?: string;
    strAlcoholic?: string;
    strGlass?: string;
    strInstructions?: string;
    strDrinkThumb: string;
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
  pageOrigin?: string;
};

const CocktailDetailed = ({ info }: CocktailProps) => {
  const ingredientsList = handleIngredients(info);
  return (
    <div className="flex flex-col ">
      <div className="inset-0 overflow-y-hidden opacity-50 w-full fixed">
        <Image
          src={info.strDrinkThumb}
          alt="backgroundImage"
          fill
          objectFit="cover"
        />
      </div>
      <div className="z-10">
        <div className="flex justify-between items-center">
          <h1 className="justify-center">{info.strDrink}</h1>
          <FavortiesIcons
            idDrink={info.idDrink}
            strDrink={info.strDrink}
            strDrinkThumb={info.strDrinkThumb}
          />
        </div>
        <div className="flex gap-8">
          <div className="min-w-[350px]">
            {info.strDrinkThumb && (
              <div className="border-black border bg-black p-1">
                <Image
                  src={info.strDrinkThumb}
                  alt={`image of a cocktail: ${info.strDrink}`}
                  objectFit="contain"
                  height="400"
                  width="400"
                  style={{ borderRadius: "10%" }}
                />
              </div>
            )}
          </div>

          <div className="w-2/3">
            <h4>Ingredients</h4>
            {ingredientsList.length ? (
              <div className="list-disc list-inside	flex flex-wrap gap-3">
                {ingredientsList.map((item) => {
                  return (
                    <div className="w-60" key={item}>
                      <li>{item}</li>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="italic">
                There is no ingredient listed for this cocktail
              </p>
            )}
            <h4>Instructions</h4>
            {info.strInstructions ? (
              info.strInstructions
            ) : (
              <p className="italic">
                There is no instruction listed for this cocktail
              </p>
            )}
            <div className="flex gap-24">
              <div>
                <h4>Type of glass</h4>
                {info.strGlass ? (
                  info.strGlass
                ) : (
                  <p className="italic">not available</p>
                )}
              </div>
              <div>
                <h4>Alcohol content</h4>
                {info.strAlcoholic ? (
                  info.strAlcoholic
                ) : (
                  <p className="italic">not available</p>
                )}
              </div>
              <div>
                <h4>Category</h4>
                {info.strCategory ? (
                  info.strCategory
                ) : (
                  <p className="italic">not available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetailed;
