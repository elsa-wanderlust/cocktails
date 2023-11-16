// function that goes through the list of ingredients, and return an array of object
// only for the ingredients that are defined
// [{"ingredient1 : qty 1"}, {"ingredient2 : qty 2"}, {"ingredient3 : qty 3"}]

import { CocktailProps } from "@/shapes";

const handleIngredients = (info: CocktailProps) => {
  const ingredientsList = [];
  for (let i = 1; i < 16; i++) {
    let ingredientNumber: string = "strIngredient" + i;
    let qtyNumber: string = "strMeasure" + i;
    if (
      info[ingredientNumber as keyof typeof info] &&
      info[qtyNumber as keyof typeof info]
    ) {
      ingredientsList.push(
        `${info[qtyNumber as keyof typeof info]}: ${
          info[ingredientNumber as keyof typeof info]
        }`
      );
    }
  }
  return ingredientsList;
};

export default handleIngredients;
