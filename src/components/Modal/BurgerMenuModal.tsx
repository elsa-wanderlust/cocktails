"use client";

import { Dialog, Transition } from "@headlessui/react";

import BurgerMenu from "../BugerMenu";
import { Fragment } from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Signup } from "./Signup";
import { useIsConnectedState } from "@/state/modalSelectState";
import { useState } from "react";

type ModalProps = {
  modalOpen: boolean;
  closeModal: () => void;
};

const BurgerMenuModal = ({ modalOpen, closeModal }: ModalProps) => {
  const { isConnected } = useIsConnectedState();

  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-20 md:hidden"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-50"
              >
                <Dialog.Panel className="fixed left-0 top-28 w-32 h-screen overflow-y-hidden transform bg-lime-200 text-left shadow-xl transition-all flex flex-col">
                  <BurgerMenu />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BurgerMenuModal;
