import type { ImageProps } from "next/image";
import Image from "next/image";
import type { FC } from "react";
import { cn } from "@/lib/utils";

const DinamicShadowImage: FC<ImageProps> = ({ className, ...props }) => {
  return (
    <div className="relative w-max-content">
      <Image
        {...props}
        alt={props.alt ?? ""}
        className={cn("blur-sm opacity-30 scale-105 rounded-lg", className)}
      />
      <Image
        {...props}
        alt={props.alt ?? ""}
        className={cn("absolute top-0 left-0 rounded-lg", className)}
      />
    </div>
  );
};

export default DinamicShadowImage;
