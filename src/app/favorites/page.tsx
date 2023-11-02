"useClient";

import { useEffect, useState } from "react";

import Image from "next/image";
// import ModalFrame from "./Modal/ModalFrame";
import { getCookie } from "cookies-next";
import { hasCookie } from "cookies-next";
import loveIconBlack from "../images/icons/loveBlack.svg";
import loveIconRed from "../images/icons/loveRed.svg";

const FavoriteCocktails = () => {
  const [favDrinks, setFavDrinks] = useState([]);

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
          setFavDrinks(favCocktails);
        }
      } catch (error: any) {
        alert(error);
      }
    };
    isFav();
  }, []);

  return (
    <div>
      <p>here we list all the cocktails</p>
    </div>
  );
};

export default FavoriteCocktails;
