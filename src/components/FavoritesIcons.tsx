import Image from "next/image";
// import Icons
import hateIcon from "../images/icons/hate.svg";
import loveIcon from "../images/icons/love.svg";
import tryIcon from "../images/icons/try.svg";

const FavortiesIcons = () => {
  return (
    <div className="flex gap-5">
      <Image
        src={loveIcon}
        alt="love"
        width={40}
        height={40}
        className="object-contain"
      />
      <Image
        src={tryIcon}
        alt="try"
        width={40}
        height={40}
        className="object-contain"
      />
      <Image
        src={hateIcon}
        alt="hate"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  );
};

export default FavortiesIcons;
