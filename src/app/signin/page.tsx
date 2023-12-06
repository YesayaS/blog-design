"use client";

import "dotenv/config";
import Link from "next/link";

import SignInForm from "./signinForm";

import "./signin.scss";

export default function SignIn(this: any) {
  return (
    <div className="signin">
      <div className="signin__wrapper">
        <div className="signin__left-side">
          <Link className="signin__logo" href="/">
            Logo
          </Link>
          <div className="signin__text">Lorem Ipsum Lorem Ipsum Lorem</div>
        </div>
        <div className="signin__right-side">
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
