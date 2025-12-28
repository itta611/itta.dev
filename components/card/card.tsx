import type { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="py-8 px-12 bg-gray-800 border rounded-2xl">{children}</div>
  );
};

export { Card };
