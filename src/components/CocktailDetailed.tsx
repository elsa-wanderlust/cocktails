import { CocktailProps } from "@/shapes";
import FavortiesIcons from "./FavoritesIcons";
import Image from "next/image";
import handleIngredients from "@/utils/handleIngredients";

type oneCocktailProps = {
  info: CocktailProps;
  pageOrigin?: string;
};

const CocktailDetailed = ({ info }: oneCocktailProps) => {
  const ingredientsList = handleIngredients(info);
  return (
    <div className="flex flex-col ">
      {/* BACKGROUND IMAGE */}
      <div className="inset-0 overflow-y-hidden opacity-50 w-full fixed">
        <Image
          src={info.strDrinkThumb}
          alt="backgroundImage"
          fill
          objectFit="cover"
        />
      </div>
      <div className="z-10">
        {/* TITLE AND FAV ICON */}
        <div className="flex justify-between items-center">
          <h1 className="justify-center">{info.strDrink}</h1>
          <FavortiesIcons
            idDrink={info.idDrink}
            strDrink={info.strDrink}
            strDrinkThumb={info.strDrinkThumb}
          />
        </div>

        <div className="flex flex-col gap-8 sm:flex-row items-center sm:items-start">
          {/* PICTURE */}
          <div className="w-64 lg:w-96">
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
          {/* COCKTAIL INFO */}
          <div className="flex-1 left-0">
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
            <div className="hidden md:block">
              <h4>Instructions</h4>
              {info.strInstructions ? (
                info.strInstructions
              ) : (
                <p className="italic">
                  There is no instruction listed for this cocktail
                </p>
              )}
            </div>

            <div className="hidden gap-24 lg:flex">
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
        {/* INGREDIENTS UNDER PICTURE */}
        <div className="md:hidden">
          <h4>Instructions</h4>
          {info.strInstructions ? (
            info.strInstructions
          ) : (
            <p className="italic">
              There is no instruction listed for this cocktail
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CocktailDetailed;
