import React from "react";

export default function Header({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <div
      className={`col-start-1 col-end-13 grid grid-cols-12 bg-gray-100 ${style}`}
    >
      {children}
    </div>
  );
}
