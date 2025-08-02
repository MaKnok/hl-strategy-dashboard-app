"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/" || pathname === "/sign-up";

  useEffect(() => {
    const body = document.body;
    body.classList.remove("theme-login", "theme-default");
    body.classList.add(isLoginPage ? "theme-login" : "theme-default");
  }, [pathname]);

  return <>{children}</>;
}
