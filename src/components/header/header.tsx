"use client";

import { Montserrat } from 'next/font/google'


import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="logo" >Logo</h1>
        <div className="navbar">
            <a href="">Latest</a>
            <a href="">Our Story</a>
            <a href="">Write</a>
        </div>
        <a className="account" href="">Log in</a>
      </div>
    </header>
  );
}
