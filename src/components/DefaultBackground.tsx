import Image from "next/image";
import backgroundImage from "../images/shutterstock_2075183863.jpg";

const DefaultBackground = () => {
  return (
    <div className="absolute inset-0 overflow-y-hidden opacity-50 w-full h-full -z-10">
      <Image
        src={backgroundImage}
        alt="cocktail bar"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default DefaultBackground;
