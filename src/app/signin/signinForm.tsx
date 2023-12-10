import { useState, useEffect } from "react";
import fetchAPI from "@/src/utils/fetchAPI";
import useAuth from "@@/hooks/useAuth";

export default function SignInForm() {
  const { authLogin } = useAuth();

  const [error, setError] = useState<string | null>(null);
  const [isSignin, setIsSignin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    setFormData({
      username: "",
      password: "",
      confirm_password: "",
    });
    setError(null);
  }, [isSignin]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (formData.username.length < 3) {
      setError("Username should be at least 3 characters");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters");
      return false;
    }

    if (formData.password !== formData.confirm_password) {
      setError("Password and Confirm password do not match");
      return false;
    }

    return true;
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (isSignin) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      };

      const { response, error } = await fetchAPI("/login", options);

      if (error) setError(error.error);

      if (response) {
        authLogin(response.token);
      }
    } else {
      const isValid = validateForm();

      if (isValid) {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
            confirm_password: formData.confirm_password,
          }),
        };

        const { response, error } = await fetchAPI("/signup", options);

        if (error) setError(error.error);

        if (response) setIsSignin(true);
      }
    }
  }

  return (
    <form className="signin__form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        className="signin__input-text"
        name="username"
        type="text"
        placeholder="Username"
        required={true}
        value={formData.username}
        onChange={handleInputChange}
      />
      <label htmlFor="password">Password</label>
      <input
        className="signin__input-text"
        name="password"
        type="password"
        placeholder="Password"
        required={true}
        value={formData.password}
        onChange={handleInputChange}
      />
      {!isSignin && (
        <>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            className="signin__input-text"
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            required={true}
            value={formData.confirm_password}
            onChange={handleInputChange}
          />
        </>
      )}

      {isSignin ? (
        <button id="log-in" className="signin__submit" type="submit">
          Log in
        </button>
      ) : (
        <button id="sign-up" className="signin__submit" type="submit">
          Sign Up
        </button>
      )}

      {error && <p className="error-text">{error}</p>}

      {isSignin ? (
        <p>
          Already have an account? &nbsp;
          <a
            href="#"
            onClick={() => {
              setIsSignin(false);
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
              setIsSignin(true);
            }}
          >
            Sign in
          </a>
        </p>
      )}
    </form>
  );
}
