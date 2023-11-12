import CocktailDetailed from "@/components/CocktailDetailed";
import { notFound } from "next/navigation";

type CocktailIdPageProps = {
  params: {
    id: string;
  };
};

const getCocktailDetails = async (req: string) => {
  console.log("-----req", req);
  try {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req}`
    );
    const data = await res.json();
    return data.drinks[0];
  } catch (error) {
    console.log(error);
  }
};

const CocktailIdPage = async ({ params }: CocktailIdPageProps) => {
  const cocktailInfo = await getCocktailDetails(params.id);
  return (
    <div>
      {cocktailInfo ? <CocktailDetailed info={cocktailInfo} /> : notFound()}
    </div>
  );
};

export default CocktailIdPage;
