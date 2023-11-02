"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
// import components
import ModalFrame from "./Modal/ModalFrame";
import { getCookie } from "cookies-next";
import { hasCookie } from "cookies-next";
// import Icons
// import hateIcon from "../images/icons/hate.svg";
import loveIcon from "../images/icons/love.svg";
import tryIcon from "../images/icons/try.svg";

type CocktailProps = {
  idDrink: string;
};

const FavortiesIcons = ({ idDrink }: CocktailProps) => {
  const [isDrinkFav, setIsDrinkFav] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);

  const handleSelectFavorite = async () => {
    const token = getCookie("cocktails");
    if (!token) {
      setmodalOpen(true);
    } else {
      try {
        const response = await fetch("/api/favorite", {
          method: "POST",
          body: JSON.stringify({ token, idDrink }),
        });
        const responseData = await response.json();
        console.log("---response", response);
        console.log("---responseData", responseData);
        if (!response.ok) {
          throw new Error(responseData.message);
        } else {
          alert("haha saved");
        }
      } catch (error: any) {
        alert(error);
      }
    }
  };

  useEffect(() => {
    console.log("----- useEffect called");
    const token = getCookie("cocktails");
    console.log("----- token", token);
    const isFav = async () => {
      console.log("----- is FAV called");
      try {
        const response = await fetch("/api/favorite", {
          method: "GET",
          headers: { authorization: `Bearer ${token}` },
          // body: JSON.stringify({ token, idDrink }),
        });
        const responseData = await response.json();
        console.log("---response", response);
        console.log("---responseData", responseData);
        if (!response.ok) {
          alert("FAILURE TOTAL");
          throw new Error(responseData.message);
        } else {
          alert("haha saved");
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
      <div className="relative group">
        <Image
          src={loveIcon}
          alt="love"
          width={40}
          height={40}
          className="object-contain"
          onClick={handleSelectFavorite}
        />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-10 text-xs bg-gray-200 text-black italic whitespace-nowrap py-0.5 px-1 rounded-md">
          save as a favorite
        </div>
      </div>
      {/* <div className="relative group">
        <Image
          src={tryIcon}
          alt="try"
          width={40}
          height={40}
          className="object-contain"
          onClick={handleSelectFavorite}
        />
        <div className="opacity-0 group-hover:opacity-100 duration-300 absolute top-10 right-0 text-xs bg-gray-200 text-black italic whitespace-nowrap py-0.5 px-1 rounded-md">
          need to try
        </div>
      </div> */}
      {/* <div>
        <Image
          src={hateIcon}
          alt="hate"
          width={40}
          height={40}
          className="object-contain"
          onClick={handleSelectFavorite}
        />
      </div> */}
      <ModalFrame
        modalOpen={modalOpen}
        closeModal={() => {
          setmodalOpen(false);
        }}
      />
    </div>
  );
};

export default FavortiesIcons;
