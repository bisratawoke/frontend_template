import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-12 h-screen">{children}</div>;
}
