"use client";

import { Dialog, Transition } from "@headlessui/react";

import { Fragment } from "react";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { Signup } from "./Signup";
import { useState } from "react";

type ModalProps = {
  modalOpen: boolean;
  closeModal: () => void;
  modalSelect: string;
  setModalSelect: React.Dispatch<React.SetStateAction<string>>;
};

const ModalFrame = ({
  modalOpen,
  closeModal,
  modalSelect,
  setModalSelect,
}: ModalProps) => {
  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
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
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col">
                  {modalSelect === "signup" ? (
                    <Signup
                      closeModal={closeModal}
                      setModalSelect={setModalSelect}
                    />
                  ) : modalSelect === "login" ? (
                    <Login
                      closeModal={closeModal}
                      setModalSelect={setModalSelect}
                    />
                  ) : (
                    <Logout
                      closeModal={closeModal}
                      setModalSelect={setModalSelect}
                    />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalFrame;
