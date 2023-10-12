import React from "react";

export default function Layout({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <div className={`grid grid-cols-12 h-screen ${style}`}>{children}</div>
  );
}
