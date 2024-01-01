import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2>BlogLayout {children}</h2>;
}
