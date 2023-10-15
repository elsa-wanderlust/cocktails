// function that goes through the list of ingredients, and return an array of object
// only for the ingredients that are defined
// [{"ingredient1 : qty 1"}, {"ingredient2 : qty 2"}, {"ingredient3 : qty 3"}]

type CocktailInfos = {
  // info: {
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
  // dateModified?: string;
  // ingredientNumber?: string;
  // };
};

type oneIngredient = {
  ingredientName?: string;
  ingredientQty?: string;
};

// const handleIngredients = (info: CocktailInfos) => {
//   const ingredientsList = [];
//   for (let i = 1; i < 16; i++) {
//     let ingredientNumber: string = "strIngredient" + i;
//     let qtyNumber: string = "strMeasure" + i;
//     if (
//       info[ingredientNumber as keyof typeof info] &&
//       info[qtyNumber as keyof typeof info]
//     ) {
//       let oneIngredient: oneIngredient = {
//         ingredientName: "",
//         ingredientQty: "",
//       };
//       oneIngredient.ingredientName =
//         info[ingredientNumber as keyof typeof info];
//       oneIngredient.ingredientQty = info[qtyNumber as keyof typeof info];
//       ingredientsList.push(oneIngredient);
//     }
//   }
//   return ingredientsList;
// };

const handleIngredients = (info: CocktailInfos) => {
  const ingredientsList = [];
  for (let i = 1; i < 16; i++) {
    let ingredientNumber: string = "strIngredient" + i;
    let qtyNumber: string = "strMeasure" + i;
    if (
      info[ingredientNumber as keyof typeof info] &&
      info[qtyNumber as keyof typeof info]
    ) {
      // let oneIngredient: oneIngredient = {
      //   ingredientName: "",
      //   ingredientQty: "",
      // };
      // oneIngredient.ingredientName =
      //   info[ingredientNumber as keyof typeof info];
      // oneIngredient.ingredientQty = info[qtyNumber as keyof typeof info];
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
