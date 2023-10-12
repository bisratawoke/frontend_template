import React from "react";

export default function Body({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div
      className={`col-start-1 col-end-13 lg:grid lg:grid-cols-12 grid grid-cols-1 ${bg}`}
    >
      {children}
    </div>
  );
}
