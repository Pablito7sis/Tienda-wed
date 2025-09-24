"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Ocultar el Header en la página de login
  if (pathname === "/login") {
    return null;
  }

  return <Header />;
}
