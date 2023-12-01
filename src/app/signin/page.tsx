"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import "./signin.scss";

export default function Home() {
  const [signType, setsignType] = useState("signin");

  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };

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
          <form className="signin__form" method="POST" action="">
            <input
              className="signin__input-text"
              name="username"
              type="text"
              placeholder="Username"
            />
            <input
              className="signin__input-text"
              name="password"
              type="text"
              placeholder="Password"
            />
            {signType === "signup" && (
              <input
                className="signin__input-text"
                name="password"
                type="text"
                placeholder="Confirm Password"
              />
            )}
            {signType === "signin" ? (
              <button className="signin__log-in" type="reset">
                Log in
              </button>
            ) : (
              <button className="signin__log-in" type="reset">
                Sign Up
              </button>
            )}
              {signType === "signup" ? (
            <p>
              Don&#39;t have an account? &nbsp;
                <Link href="#" onClick={() => setsignType("signin")}>
                  Sign in
                </Link>
            </p>
              ) : (
                <p>
              Already have an account? &nbsp;
                <Link href="#" onClick={() => setsignType("signup")}>
                  Sign up
                </Link></p>
              )}
          </form>
        </div>
      </div>
    </div>
  );
}
