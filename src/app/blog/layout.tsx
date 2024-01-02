import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pt-[20px] md:pt-[50px]">{children}</div>;
}
