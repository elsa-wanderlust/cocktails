import Link from "next/link";
import { useState } from "react";
import TopMenuSecondaryTitle from "./TopMenuSecondaryTitle";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   Button,
// } from "@nextui-org/react"; // ELSA REMOVE PKG

type PropsType = {
  info: {
    section: string;
    url?: string;
    elements?: {
      subSection?: string;
      url?: string;
    }[];
  };
  dropMenuVisible: boolean;
  setDropMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const TopMenuTitle = ({
  info,
  dropMenuVisible,
  setDropMenuVisible,
}: PropsType) => {
  const openCloseMenu = () => setDropMenuVisible(!dropMenuVisible);
  const closeMenu = () => {
    if (dropMenuVisible) {
      setDropMenuVisible(false);
    }
  };

  return info.url ? (
    <Link href={info.url} onClick={closeMenu}>
      {info.section}
    </Link>
  ) : (
    <div>
      <p onClick={openCloseMenu}>{info.section}</p>
      <div className="flex flex-col gap-5">
        {dropMenuVisible &&
          info.elements &&
          info.elements.map((item) => {
            return (
              item.url &&
              item.subSection && (
                <Link key={item.subSection} href={item.url} onClick={closeMenu}>
                  {item.subSection}
                </Link>
              )
            );
          })}
      </div>
    </div>
  );
};

export default TopMenuTitle;
