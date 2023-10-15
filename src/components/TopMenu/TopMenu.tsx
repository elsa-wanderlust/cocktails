"use client";
import Link from "next/link";
// import { useState } from "react";
import TopMenuData from "@/data/topMenuData";
import TopMenuTitle from "./TopMenuTitle";

const TopMenu = () => {
  // console.log(TopMenuData);
  return (
    <div className="flex gap-20 bg-amber-300">
      {TopMenuData.map((item) => {
        return (
          <TopMenuTitle
            key={item.section}
            info={item}
            // dropMenuVisible={dropMenuVisible}
            // setdropMenuVisible={setdropMenuVisible}
          />
        );
      })}
    </div>
  );
};

export default TopMenu;
