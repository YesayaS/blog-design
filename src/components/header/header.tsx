"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import "./header.scss";

export default function Header() {
  const nonShown = ["/signin"];

  const pathname = usePathname();

  if (nonShown.includes(pathname)) {
    return;
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="logo" href="/">
          Logo
        </Link>
        <div className="navbar">
          <a href="">Latest</a>
          <a href="">Our Story</a>
          <a href="">Write</a>
        </div>
        <Link className="account" href="/signin">
          Log in
        </Link>
      </div>
    </header>
  );
}
