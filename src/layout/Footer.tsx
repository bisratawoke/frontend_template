import React from "react";

export default function Footer({ children }: { children: React.ReactNode }) {
  return (
    <div className="col-start-1 col-end-13 grid grid-cols-12 bg-gray-100">
      {children}
    </div>
  );
}
