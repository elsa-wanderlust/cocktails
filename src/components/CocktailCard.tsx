import { CocktailCardProps } from "@/shapes";
import Image from "next/image";
import Link from "next/link";

type CocktailCardInfoProps = {
  info: CocktailCardProps;
};

const CocktailCard = ({ info }: CocktailCardInfoProps) => {
  return (
    <Link
      href={`/cocktail/${info.idDrink}`}
      className="border border-green-950 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 aspect-[4/5] rounded-sm flex flex-col items-center bg-green-50 hover:brightness-50 hover:z-auto"
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
        <div className="backdrop-brightness-75 w-full absolute bottom-2">
          <p className="px-1 mx-2 line-clamp-1 text-white">{info.strDrink}</p>
        </div>
      </div>
    </Link>
  );
};

export default CocktailCard;
