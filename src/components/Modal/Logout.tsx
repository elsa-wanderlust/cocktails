import type { FieldValues } from "react-hook-form";
import Image from "next/image";
import closeIcon from "../../images/icons/close.svg";
import { deleteCookie } from "cookies-next";

type LogoutProps = {
  closeModal: () => void;
  setModalSelect: React.Dispatch<React.SetStateAction<string>>;
};

export const Logout = ({ closeModal, setModalSelect }: LogoutProps) => {
  const logout = () => {
    deleteCookie("cocktails");
    setModalSelect("signup");
    closeModal();
    alert("you are logged out");
  };

  return (
    <div>
      <button
        type="button"
        onClick={closeModal}
        className="absolute right-2 top-2 border-none"
      >
        <Image
          src={closeIcon}
          alt="close"
          width={20}
          height={20}
          className="object-contain"
        />
      </button>
      <div className="flex flex-col justify-center gap-4 px-3 py-2">
        <h3 className="text-center">LOG OUT</h3>
        <button
          onClick={logout}
          className="flex w-full justify-center rounded-md bg-emerald-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-slate-300"
        >
          Log out
        </button>
      </div>
    </div>
  );
};
