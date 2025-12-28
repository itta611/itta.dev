import type { ImageProps } from "next/image";
import Image from "next/image";
import type { FC } from "react";

const DinamicShadowImage: FC<ImageProps> = (props) => {
  return (
    <div className="relative w-max-content">
      <Image
        {...props}
        alt={props.alt ?? ""}
        className="blur-sm opacity-30 scale-105 rounded-xl"
      />
      <Image
        {...props}
        alt={props.alt ?? ""}
        className="absolute top-0 left-0 rounded-xl"
      />
    </div>
  );
};

export default DinamicShadowImage;
