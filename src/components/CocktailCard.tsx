import Image from "next/image";
import Link from "next/link";

type CocktailCardProps = {
  info: {
    idDrink: string;
    strDrink: string;
    // strDrinkAlternate?: string;
    // strTags?: string; // elsa TBC
    // strVideo?: string; // elsa TBC,
    // strCategory: string;
    // strIBA?: string;
    // strAlcoholic?: string;
    // strGlass?: string;
    // strInstructions?: string;
    // strInstructionsES?: string;
    // strInstructionsDE?: string;
    // strInstructionsFR?: string;
    // strInstructionsIT?: string;
    // strInstructionsZH-HANS: null,
    // strInstructionsZH-HANT: null,
    strDrinkThumb?: string;
    // strIngredient1?: string;
    // strIngredient2?: string;
    // strIngredient3?: string;
    // strIngredient4?: string;
    // strIngredient5?: string;
    // strIngredient6?: string;
    // strIngredient7?: string;
    // strIngredient8?: string;
    // strIngredient9?: string;
    // strIngredient10?: string;
    // strIngredient11?: string;
    // strIngredient12?: string;
    // strIngredient13?: string;
    // strIngredient14?: string;
    // strIngredient15?: string;
    // strMeasure1?: string;
    // strMeasure2?: string;
    // strMeasure3?: string;
    // strMeasure4?: string;
    // strMeasure5?: string;
    // strMeasure6?: string;
    // strMeasure7?: string;
    // strMeasure8?: string;
    // strMeasure9?: string;
    // strMeasure10?: string;
    // strMeasure11?: string;
    // strMeasure12?: string;
    // strMeasure13?: string;
    // strMeasure14?: string;
    // strMeasure15?: string;
    // strImageSource?: string;
    // strImageAttribution?: string;
    // strCreativeCommonsConfirmed?: string;
    // dateModified?: string;
  };
};

const CocktailCard = ({ info }: CocktailCardProps) => {
  return (
    <Link
      href={`/cocktail/${info.idDrink}`}
      className="border border-green-950 w-1/6 aspect-[4/5] rounded-sm flex flex-col items-center bg-green-50 hover:brightness-50 hover:z-auto"
    >
      <div className="w-full h-full relative">
        {info.strDrinkThumb && (
          <Image
            src={info.strDrinkThumb}
            alt={`image of a cocktail: ${info.strDrink}`}
            fill
            objectFit="cover"
            loading="lazy"
          />
        )}
        <p className="absolute bottom-2  px-1 rounded-lg mx-2 line-clamp-1 backdrop-brightness-75 text-white">
          {info.strDrink}
        </p>
      </div>
    </Link>
  );
};

export default CocktailCard;
