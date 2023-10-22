import { useState, useEffect } from "react";
import Image from "next/image";
import closeIcon from "../images/icons/close.svg";
import hateIcon from "../images/icons/hate.svg";
import loveIcon from "../images/icons/love.svg";
import tryIcon from "../images/icons/try.svg";
import { cocktailDetails } from "@/app/api/route";
import handleIngredients from "@/utils/handleIngredients";

type CocktailModalProps = {
  id: string;
  closeModal: () => void;
};
type dataProps = {
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

const CocktailModal = ({ id, closeModal }: CocktailModalProps) => {
  const [data, setData] = useState<dataProps>();
  useEffect(() => {
    const getCockailDetails = async () => {
      try {
        const data = await cocktailDetails(id);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCockailDetails();
  }, []);

  const ingredientsList = data ? handleIngredients(data) : [];

  return (
    <div className="p-3">
      <button
        type="button"
        onClick={closeModal}
        className="absolute right-2 top-2 border-none"
      >
        <Image
          src={closeIcon}
          alt="close"
          width={20}
          height={20}
          className="object-contain"
        />
      </button>
      {data && (
        <div className="flex">
          <h1 className="justify-center">{data.strDrink}</h1>
          <div>
            <div>
              <div className="w-1/3">
                {data.strDrinkThumb && (
                  <div className="border-black border bg-black p-1">
                    <img
                      src={data.strDrinkThumb}
                      alt={`image of a cocktail: ${data.strDrink}`}
                      height="100%"
                      width="100%"
                      style={{ borderRadius: "10%" }}
                    />
                  </div>
                )}
                <h4>Ingredients</h4>
                <div className="list-disc list-inside">
                  {ingredientsList.map((item, index) => {
                    return (
                      <div className="w-60" key={index}>
                        <li>{item}</li>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src={loveIcon}
                    alt="love"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <Image
                    src={tryIcon}
                    alt="try"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  <Image
                    src={hateIcon}
                    alt="hate"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <h4>Instructions</h4>
                {data.strInstructions}
              </div>
            </div>
            {/* <div>
              <h4>Category</h4>
              {data.strCategory}
              <h4>Type of glass</h4>
              {data.strGlass}
              <h4>Alcohol content</h4>
              {data.strAlcoholic}
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CocktailModal;
