import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { API_ENDPOINT } from "@@/utils/api";

export default function SignInForm() {
  const LOGIN = "login";
  const SIGNUP = "signup";
  const router = useRouter();

  const defaultForm = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [signType, setSignType] = useState(LOGIN);
  const [formData, setFormData] = useState(defaultForm);
  const [error, setError] = useState("");

  useEffect(() => {
    const defaultForm = {
      username: "",
      password: "",
      confirmPassword: "",
    };
    setFormData(defaultForm);
    setError("");
  }, [signType]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const makeApiRequest = async (
    url: string,
    method: string,
    data: object,
    successCallback: () => void,
  ) => {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseMessage = await response.json();

      if (!response.ok) {
        if (response.status === 401 || response.status === 409) {
          setError(responseMessage.error);
        }
        throw new Error(`${response.status}`);
      }
      successCallback();
    } catch (error: any) {
      console.error(error);
    }
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

    if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm password do not match");
      return false;
    }

    return true;
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (signType === LOGIN) {
      const { username, password } = formData;
      await makeApiRequest(
        `${API_ENDPOINT}/login`,
        "POST",
        {
          username,
          password,
        },
        () => router.push("/"),
      );
    } else {
      const isFormValid = validateForm();

      if (!isFormValid) {
        return console.error(new Error("400"));
      }

      const { username, password, confirmPassword } = formData;
      makeApiRequest(
        `${API_ENDPOINT}/signup`,
        "POST",
        {
          username,
          password,
          confirmPassword,
        },
        () => setSignType(LOGIN),
      );
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
      {signType === SIGNUP && (
        <>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="signin__input-text"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required={true}
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </>
      )}

      {signType === LOGIN ? (
        <button id="log-in" className="signin__submit" type="submit">
          Log in
        </button>
      ) : (
        <button id="sign-up" className="signin__submit" type="submit">
          Sign Up
        </button>
      )}

      {error ? <p className="error-text">{error}</p> : ""}

      {signType === LOGIN ? (
        <p>
          Already have an account? &nbsp;
          <a
            href="#"
            onClick={() => {
              setSignType(SIGNUP);
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
              setSignType(LOGIN);
              setError("");
            }}
          >
            Sign in
          </a>
        </p>
      )}
    </form>
  );
}
