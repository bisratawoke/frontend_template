import React from "react";

export default function Body({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <div
      className={`col-start-1 col-end-13 lg:grid lg:grid-cols-12 grid grid-cols-1 ${style}`}
    >
      {children}
    </div>
  );
}
