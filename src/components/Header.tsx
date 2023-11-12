"use client";

// TO DO : factorize the menu content in responsive
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

import BurgerMenuModal from "./Modal/BurgerMenuModal";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import ModalFrame from "./Modal/ModalFrame";
import backgroundImage from "../images/header_bg.jpg";
import burgerIcon from "../images/icons/burger.svg";
import { getCookie } from "cookies-next";
import { useIsConnectedState } from "@/state/modalSelectState";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { isConnected, setIsConnected } = useIsConnectedState();

  useEffect(() => {
    const cookieSaved = getCookie("cocktails");
    if (cookieSaved) {
      setIsConnected(cookieSaved);
    } else {
      setIsConnected("none");
    }
  }, [setIsConnected]);

  const cocktailSearchMenu = [
    {
      subTitle: "...by name",
      url: "/searchByName",
    },
    {
      subTitle: "...by ingredient",
      url: "/searchByIngredient",
    },
  ];

  return (
    <header className="fixed top-0 z-20 w-screen h-28">
      <div className="absolute inset-0 overflow-y-hidden opacity-95 -scale-x-100 md:scale-x-100">
        <Image
          src={backgroundImage}
          alt="backgroundImage"
          fill
          objectFit="cover"
        />
      </div>

      <nav
        className="relative mx-0 max-w-7xl items-center justify-between p-6 h-full"
        aria-label="Global"
      >
        {isConnected === "" ? null : (
          <div>
            <div className="md:hidden z-30 flex gap-24 text-lime-200">
              <Image
                src={burgerIcon}
                alt="burger menu icon"
                width={40}
                height={40}
                className="object-contain text-lime-200 hover:cursor-pointer"
                onClick={() => {
                  setIsBurgerMenuOpen(true);
                }}
              />
              <h1>COCKTAILS</h1>
            </div>

            <div className="md:flex hidden mx-auto  max-w-7xl items-center justify-between h-full">
              <div className="flex w-3/12 ">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                </a>
              </div>
              <a
                href="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-900 hover:bg-gray-100"
              >
                Random Cocktail
              </a>
              <>
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-700"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                  </button>
                </div>
                <Popover.Group className="lg:gap-x-12">
                  <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-medium font-semibold leading-6 text-green-900 outline-none">
                      Find a cocktail
                      <ChevronDownIcon
                        className="h-5 w-5 flex-none text-green-400"
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-green-900/5">
                        <div className="p-4">
                          {cocktailSearchMenu.map((item) => (
                            <div
                              key={item.subTitle}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                            >
                              <div className="flex-auto">
                                <a
                                  href={item.url}
                                  className="block font-semibold text-green-900"
                                >
                                  {item.subTitle}
                                  <span className="absolute inset-0" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>
                </Popover.Group>
              </>
              {isConnected !== "none" && (
                <a
                  href="/favorites"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-900 hover:bg-gray-100"
                >
                  My favorite Cocktails
                </a>
              )}
              <p
                onClick={() => {
                  setmodalOpen(true);
                }}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-900 hover:bg-gray-100"
              >
                {isConnected === "none" ? "Login / Sign up" : "Logout"}
              </p>
            </div>
          </div>
        )}
      </nav>
      <ModalFrame
        modalOpen={modalOpen}
        closeModal={() => {
          setmodalOpen(false);
        }}
      />
      <BurgerMenuModal
        modalOpen={isBurgerMenuOpen}
        closeModal={() => {
          setIsBurgerMenuOpen(false);
        }}
      />
    </header>
  );
}
