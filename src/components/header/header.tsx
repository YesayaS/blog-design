"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import SignedIn from "./accountSignedIn";

import "./header.scss";

export default function Header() {
  const toHideHeaderPath = ["/signin"];

  const pathname = usePathname();

  // don't show header if path included in array
  if (toHideHeaderPath.includes(pathname)) {
    return;
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link className="logo" href="/">
          Logo
        </Link>
        <div className="navbar">
          <a href="/">Latest</a>
          <a href="">Our Story</a>
          <Link href="/post/create">Write</Link>
        </div>
        <SignedIn />
      </div>
    </header>
  );
}
