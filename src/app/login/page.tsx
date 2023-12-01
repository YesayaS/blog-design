import Link from "next/link";

import "./login.scss";

export default function Home() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left-side">
          <Link className="login__logo" href="/">
            Logo
          </Link>
          <div className="login__text">Lorem Ipsum Lorem Ipsum Lorem</div>
        </div>
        <div className="login__right-side">
          <form className="login__form" method="POST" action="">
            <input
              className="login__input-text"
              name="username"
              type="text"
              placeholder="Username"
            />
            <input
              className="login__input-text"
              name="password"
              type="text"
              placeholder="Password"
            />
            <button className="login__log-in" type="reset">
              Log in
            </button>
            <p>
              Don&#39;t have account? <Link href="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
