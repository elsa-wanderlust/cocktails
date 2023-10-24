import Image from "next/image";
import closeIcon from "../../images/icons/close.svg";

type LoginProps = {
  closeModal: () => void;
  setModalSelect: React.Dispatch<React.SetStateAction<string>>;
};

export const Login = ({ closeModal, setModalSelect }: LoginProps) => {
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
        <h3>LOGIN</h3>
        <div className="flex flex-col gap-4">
          <label>
            Email: <input name="email" defaultValue="example@email.com" />
          </label>
          <label>
            Password: <input name="password" defaultValue="*********" />
          </label>
          <p onClick={() => setModalSelect("signup")}>
            If you do not have an account yet - click here to signup
          </p>
        </div>
      </div>
    </div>
  );
};
