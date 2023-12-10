"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import useAuth from "@@/hooks/useAuth";
import SignInForm from "./signinForm";

import "./signin.scss";

export default function SignIn(this: any) {
  const router = useRouter();
  const { token } = useAuth();
  if (token) {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }

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
