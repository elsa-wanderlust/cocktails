import Link from "next/link";
import { useState } from "react";
import TopMenuSecondaryTitle from "./TopMenuSecondaryTitle";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

type OneMenuTitle = {
  info: {
    section: string;
    url?: string;
    elements?: {
      subSection?: string;
      url?: string;
    }[];
  };
};

const TopMenuTitle = ({ info }: OneMenuTitle) => {
  const [dropMenuVisible, setdropMenuVisible] = useState(false);

  const openCloseMenu = () => {
    console.log("clicked");
    setdropMenuVisible(!dropMenuVisible);
  };

  const closeMenu = () => {
    console.log("@@close menu called");
    if (dropMenuVisible) {
      console.log("@@close menu called2");
      setdropMenuVisible(false);
    }
  };

  return info.url ? (
    <Link href={info.url} onClick={closeMenu}>
      {info.section}
    </Link>
  ) : (
    <div>
      <p onClick={openCloseMenu}>{info.section}</p>
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
  );
};

export default TopMenuTitle;
