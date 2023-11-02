"use client";

import { useEffect, useState } from "react";

import CocktailCard from "@/components/CocktailCard";
import Image from "next/image";
import { getCookie } from "cookies-next";
import { hasCookie } from "cookies-next";
import loveIconBlack from "../images/icons/loveBlack.svg";
import loveIconRed from "../images/icons/loveRed.svg";

type FavDrinks = {
  idDrink: string;
  strDrink: string;
  note: string;
  _id: string;
  strDrinkThumb: string;
};

const FavoriteCocktails = () => {
  const [favDrinks, setFavDrinks] = useState<FavDrinks[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getCookie("cocktails");
    const isFav = async () => {
      try {
        const response = await fetch("/api/favorite", {
          method: "GET",
          headers: { authorization: `Bearer ${token}` },
        });
        const responseData = await response.json();
        if (!response.ok) {
          // alert("FAILURE TOTAL");
          throw new Error(responseData.message);
        } else {
          const { message, favCocktails } = responseData;
          setFavDrinks(favCocktails);
          setIsLoading(false);
          console.log(favCocktails);
        }
      } catch (error: any) {
        alert(error);
      }
    };
    isFav();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>is loading...</p>
      ) : (
        <div>
          <div className="italic my-2">
            {!favDrinks.length ? (
              <p>no fav drinks</p>
            ) : (
              <p>
                There {favDrinks.length > 1 ? "are" : "is"} {favDrinks.length}{" "}
                cocktail
                {favDrinks.length > 1 && "s"} saved as favorite.
              </p>
            )}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {favDrinks.map((drink) => {
              // const { idDrink, strDrink, strDrinkThumb } = drink;
              return <CocktailCard info={drink} key={drink.idDrink} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteCocktails;
