// import components
import CocktailDetailed from "@/components/CocktailDetailed";

type CocktailIdPageProps = {
  params: {
    id: string;
  };
};

const getCocktailDetails = async (req: string) => {
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
      <CocktailDetailed info={cocktailInfo} />
    </div>
  );
};

export default CocktailIdPage;
