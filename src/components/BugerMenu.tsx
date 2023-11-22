"use client";

import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ModalFrame from "./Modal/ModalFrame";
import { getCookie } from "cookies-next";
import { useIsConnectedState } from "@/state/modalSelectState";

export default function BurgerMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
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
      subTitle: "by name",
      url: "/searchByName",
    },
    {
      subTitle: "by ingredient",
      url: "/searchByIngredient",
    },
  ];

  return (
    <div>
      <nav
        className="relative mx-auto flex gap-5 flex-col max-w-7xl items-left justify-between p-6 lg:px-8 h-24 text-sm"
        aria-label="Global"
      >
        {isConnected === "" ? null : (
          <>
            <a
              href="/"
              className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-green-900 hover:bg-gray-100"
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
                  <Popover.Button className="-mx-3 flex text-left focus:none px-3 py-2 font-semibold leading-7 text-green-900 hover:bg-gray-100">
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
                    <Popover.Panel className="absolute -left-6 top-full z-20 w-32 mt-3 wm-conte max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-green-900/5">
                      <div className="p-2 w-full">
                        {cocktailSearchMenu.map((item) => (
                          <div
                            key={item.subTitle}
                            className="group relative flex items-center gap-x-1 p-1 text-sm leading-6 hover:bg-gray-200 w-full"
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
                className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-green-900 hover:bg-gray-100"
              >
                My favorite Cocktails
              </a>
            )}
            <p
              onClick={() => {
                setmodalOpen(true);
              }}
              className="-mx-3 block rounded-lg px-3 py-2 font-semibold leading-7 text-green-900 hover:bg-gray-100"
            >
              {isConnected === "none" ? "Login / Sign up" : "Logout"}
            </p>
          </>
        )}
      </nav>
      <ModalFrame
        modalOpen={modalOpen}
        closeModal={() => {
          setmodalOpen(false);
        }}
      />
    </div>
  );
}
