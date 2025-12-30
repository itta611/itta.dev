import type { FC, HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={`py-8 px-6 sm:px-12 bg-gray-800 border rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card };
