"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useAuth from "@@/hooks/useAuth";
import useRedirectProtectedRoutes from "@/src/hooks/useRedirectProtectedRoutes";
import SignInForm from "./signinForm";
import { ROUTES } from "@@/utils/routes";

import "./signin.scss";

export default function SignIn(this: any) {
  useRedirectProtectedRoutes(true, ROUTES.ROOT);

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
