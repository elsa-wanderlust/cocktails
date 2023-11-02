"use client";

// import { isConnected } from "@/utils/isConnected";
// import { Cookies, useCookies } from "next-client-cookies";
import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import ModalFrame from "./Modal/ModalFrame";
import TopMenuData from "@/data/topMenuData";
import backgroundImage from "../images/header_bg.jpg";
import { hasCookie } from "cookies-next";
import { useIsConnectedState } from "@/state/modalSelectState";

// import { useModalSelectState } from "@/state/modalSelectState";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setmodalOpen] = useState(false);
  // const [modalSelect, setModalSelect] = useState(""); // values: login - signup - logout
  // const { modalSelect, setModalSelect } = useModalSelectState();
  const { isConnected, setIsConnected } = useIsConnectedState();

  useEffect(() => {
    const cookieSaved = hasCookie("cocktails");
    if (cookieSaved) {
      setIsConnected(true);
    }

    // // const cookies = useCookies();
    // const checkConnection = () => {
    //   // const savedCookie = cookies.get("cocktails");
    //   const savedCookie = hasCookie("cocktails");

    //   if (savedCookie) {
    //     setModalSelect("logout");
    //   } else {
    //     setModalSelect("signup");
    //   }
    // };
    // checkConnection();
  }, [setIsConnected]);

  return (
    <header className="sticky top-0">
      <div className="absolute inset-0 overflow-y-hidden opacity-95">
        <Image src={backgroundImage} alt="backgroundImage" />
      </div>
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex w-3/12 ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
          </a>
        </div>
        {TopMenuData.map((item, index) => {
          if (item.elements) {
            return (
              <>
                <div className="flex lg:hidden" key={index}>
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
                      {item.section}
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
                      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-green-900/5">
                        <div className="p-4">
                          {item.elements.map((subItem) => (
                            <div
                              key={subItem.subSection}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                            >
                              <div className="flex-auto">
                                <a
                                  href={subItem.url}
                                  className="block font-semibold text-green-900"
                                >
                                  {subItem.subSection}
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
            );
          } else if (item.url === "modal") {
            return (
              <p
                key={index}
                // href={item.url}
                onClick={() => {
                  setmodalOpen(true);
                }}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-900 hover:bg-gray-100"
              >
                {isConnected ? "Logout" : "Login / Sign up"}
                {/* {modalTitle ? item.section[1] : item.section[0]} */}
                {/* {modalTitle} */}
                {/* {modalSelect === "login" || modalSelect === "signup"
                  ? "Login / Sign up"
                  : "Logout"} */}
              </p>
            );
          } else {
            return (
              <a
                key={index}
                href={item.url}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-900 hover:bg-gray-100"
              >
                {item.section}
              </a>
            );
          }
        })}
      </nav>
      <ModalFrame
        modalOpen={modalOpen}
        closeModal={() => {
          setmodalOpen(false);
        }}
        // modalSelect={modalSelect}
        // setModalSelect={setModalSelect}
      />
    </header>
  );
}
