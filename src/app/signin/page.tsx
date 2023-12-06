"use client";

import "dotenv/config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useSignin from "@@/hook/useSignin";

import "./signin.scss";

export default function SignIn(this: any) {
  const defaultForm = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [signType, setSignType] = useState("login");
  const [formData, setFormData] = useState(defaultForm);
  const [error, setError] = useState("");

  const { login, signup } = useSignin();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (signType === "login") login(formData);
    setFormData(defaultForm);
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
          <form className="signin__form" onSubmit={handleSubmit}>
            <input
              className="signin__input-text"
              name="username"
              type="text"
              placeholder="Username"
              required={true}
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              className="signin__input-text"
              name="password"
              type="password"
              placeholder="Password"
              required={true}
              value={formData.password}
              onChange={handleInputChange}
            />
            {signType === "signup" && (
              <input
                className="signin__input-text"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                required={true}
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            )}
            {signType === "login" ? (
              <button id="log-in" className="signin__submit" type="submit">
                Log in
              </button>
            ) : (
              <button id="sign-up" className="signin__submit" type="submit">
                Sign Up
              </button>
            )}
            {error ? <p className="error-text">{error}</p> : ""}
            {signType === "login" ? (
              <p>
                Already have an account? &nbsp;
                <a
                  href="#"
                  onClick={() => {
                    setSignType("signup");
                    setError("");
                  }}
                >
                  Sign up
                </a>
              </p>
            ) : (
              <p>
                Don&#39;t have an account? &nbsp;
                <a
                  href="#"
                  onClick={() => {
                    setSignType("login");
                    setError("");
                  }}
                >
                  Sign in
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
