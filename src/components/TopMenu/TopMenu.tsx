"use client";
import Link from "next/link";
import { useState } from "react";
import TopMenuData from "@/data/topMenuData";
import TopMenuTitle from "./TopMenuTitle";

const TopMenu = () => {
  const [dropMenuVisible, setDropMenuVisible] = useState(false);

  return (
    <div className="flex gap-20 bg-amber-300 h-7">
      {TopMenuData.map((item) => {
        return (
          <TopMenuTitle
            key={item.section}
            info={item}
            dropMenuVisible={dropMenuVisible}
            setDropMenuVisible={setDropMenuVisible}
          />
        );
      })}
    </div>
  );
};

export default TopMenu;
