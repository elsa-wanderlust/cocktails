"use client";
import Image from "next/image";
import { useState } from "react";
// import Icons
// import hateIcon from "../images/icons/hate.svg";
import loveIcon from "../images/icons/love.svg";
import tryIcon from "../images/icons/try.svg";
// import components
import ModalFrame from "./Modal/ModalFrame";

const FavortiesIcons = () => {
  const [modalOpen, setmodalOpen] = useState(false);
  const [loveText, setLoveText] = useState(false);
  const [tryText, setTryText] = useState(false);

  // TO DO - isloggedIn function
  const isLoggedIn = false;

  const handleSelectFavorite = () => {
    if (!isLoggedIn) {
      setmodalOpen(true);
    }
  };

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
      <div className="relative group">
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
      </div>
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
