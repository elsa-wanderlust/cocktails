import { FormEvent } from "react";
import Image from "next/image";
import closeIcon from "../../images/icons/close.svg";
// import { useState } from "react";

type Signup = {
  closeModal: () => void;
  setModalSelect: React.Dispatch<React.SetStateAction<string>>;
};

export const Signup = ({ closeModal, setModalSelect }: Signup) => {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/user", {
      method: "POST",
      body: formData,
    });
    // console.log("@@response", response.statusText);
    // // Handle response if necessary
    const data = await response.json();
    // // ...
    console.log("@@responsedata", data);
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
      <div className="flex flex-col justify-center gap-4 py-8 px-4 items-center">
        <h3>SIGN UP</h3>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <label>
            First name: <input name="firstName" defaultValue="John" />
          </label>
          <label>
            Last name: <input name="lastName" defaultValue="Doe" />
          </label>
          <label>
            Email: <input name="email" defaultValue="example@email.com" />
          </label>
          <label>
            Password: <input name="password" defaultValue="*********" />
          </label>
          <label>
            Confirmed Password:
            <input name="password" defaultValue="*********" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p onClick={() => setModalSelect("login")}>
          If you already have an account - click here to login
        </p>
      </div>
    </div>
  );
};
