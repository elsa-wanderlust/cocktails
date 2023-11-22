"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import ModalFrame from "./Modal/ModalFrame";
import { getCookie } from "cookies-next";
import loveIconBlack from "../images/icons/loveBlack.svg";
import loveIconRed from "../images/icons/loveRed.svg";

type CocktailProps = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export default function FavortiesIcons({
  idDrink,
  strDrink,
  strDrinkThumb,
}: CocktailProps) {
  const [isDrinkFav, setIsDrinkFav] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);

  const handleSelectFavorite = async () => {
    const token = getCookie("cocktails");
    if (!token) {
      setmodalOpen(true);
    } else {
      try {
        const response = await fetch("/api/favorite", {
          method: isDrinkFav ? "DELETE" : "POST",
          body: JSON.stringify({ token, idDrink, strDrink, strDrinkThumb }),
        });
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error(responseData.message);
        } else {
          setIsDrinkFav(!isDrinkFav);
        }
      } catch (error: any) {
        alert(error);
      }
    }
  };

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
          alert("FAILURE TOTAL");
          throw new Error(responseData.message);
        } else {
          const { message, favCocktails } = responseData;
          for (let i = 0; i < favCocktails.length; i++) {
            if (favCocktails[i].idDrink === idDrink) {
              setIsDrinkFav(true);
            }
          }
        }
      } catch (error: any) {
        alert(error);
      }
    };
    if (token) {
      isFav();
    }
  }, [idDrink]);

  return (
    <div className="flex gap-10 ml-10">
      <div>
        <Image
          src={isDrinkFav ? loveIconRed : loveIconBlack}
          alt="love"
          width={40}
          height={40}
          className="object-contain text-red-600"
          onClick={handleSelectFavorite}
        />
      </div>
      <ModalFrame
        modalOpen={modalOpen}
        closeModal={() => {
          setmodalOpen(false);
        }}
      />
    </div>
  );
}
