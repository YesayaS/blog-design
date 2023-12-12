import React, { useState } from "react";

import useAuth from "@@/hooks/useAuth";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ROUTES } from "@@/utils/routes";

export default function SignedIn() {
  const route = useRouter();
  const { user, authLogout } = useAuth();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const myPost = () => {
    route.push(ROUTES.MY_POST);
  };

  const logout = () => {
    const isLoggedout = authLogout();
    if (isLoggedout) {
      route.push("/");
    }
  };

  return (
    <>
      {user ? (
        <div className="account signed-in">
          <div className="dropdown" onMouseLeave={handleMouseLeave}>
            <button className="account-logo" onClick={toggleDropdown}>
              <IoPersonCircleOutline />
            </button>
            {isDropdownVisible && (
              <div className="dropdown-content">
                <button onClick={myPost}>My posts</button>
                <button onClick={logout}>Log out</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Link className="account signed-out" href="/signin">
          Log in
        </Link>
      )}
    </>
  );
}
