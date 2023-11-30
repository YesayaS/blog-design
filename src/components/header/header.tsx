import "./header.scss";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="logo" >Logo</div>
        <div className="navbar">
            <a href="">Latest</a>
            <a href="">Our Story</a>
            <a href="">Write</a>
        </div>
        <Link className="account" href='#'>
          Log in
        </Link>
      </div>
    </header>
  );
}
