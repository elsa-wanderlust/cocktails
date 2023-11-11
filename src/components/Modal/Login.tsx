import type { FieldValues } from "react-hook-form";
import Image from "next/image";
import closeIcon from "../../images/icons/close.svg";
import closedEye from "../../images/icons/closedEye.svg";
import eye from "../../images/icons/eye.svg";
import { loginFormSchema } from "@/app/lib/validations/loginFormSchema";
import { setCookie } from "cookies-next";
import { useForm } from "react-hook-form";
import { useIsConnectedState } from "@/state/modalSelectState";
// import { useModalSelectState } from "@/state/modalSelectState";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type LoginProps = {
  closeModal: () => void;
  setModalSelect: React.Dispatch<React.SetStateAction<string>>;
};
type TLoginFormSchema = z.infer<typeof loginFormSchema>;

export const Login = ({ closeModal, setModalSelect }: LoginProps) => {
  // const { setModalSelect } = useModalSelectState();
  const { setIsConnected } = useIsConnectedState();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      } else {
        setCookie("cocktails", responseData.token);
        setIsConnected(responseData.token);
        // setModalSelect("logout");
        closeModal();
        alert("you are logged in");
      }
    } catch (error: any) {
      setError("root.serverError", {
        type: "server",
        message: error.message,
      });
    }
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
        <h3 className="text-center">LOGIN</h3>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p>Email </p>
            <input
              {...register("email")}
              type="email"
              className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:border-teal placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-950 focus:border-grey-800 sm:text-sm sm:leading-6"
            />
            {errors.email && (
              <p className="text-red-500 text-sm italic">{`${errors.email.message}`}</p>
            )}
          </div>

          <div className="relative">
            <p>Password</p>
            <input
              {...register("password")}
              type={passwordVisible ? "text" : "password"}
              className="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:border-teal placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-950 focus:border-grey-800 sm:text-sm sm:leading-6 "
            />
            <Image
              src={passwordVisible ? closedEye : eye}
              alt="eye"
              width={20}
              height={20}
              className="object-contain absolute top-8 right-2"
              onClick={() => {
                setPasswordVisible(!passwordVisible);
              }}
            />
            {errors.password && (
              <p className="text-red-500 text-sm italic">{`${errors.password.message}`}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full justify-center rounded-md bg-emerald-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-slate-300"
          >
            Submit
          </button>
        </form>
        {errors.root?.serverError.type && (
          <p className="text-red-500 text-sm italic">
            {errors.root.serverError.message}
          </p>
        )}
        <p className="text-sm italic text-center">
          If you do not have an account yet - click{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => setModalSelect("signup")}
          >
            here
          </span>{" "}
          to signup
        </p>
      </div>
    </div>
  );
};
