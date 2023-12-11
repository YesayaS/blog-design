import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useAuth from "@@/hooks/useAuth";

export default function useRedirectProtectedRoutes(
  userExist: boolean,
  redirectPath: string,
) {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (userExist && user) {
      setTimeout(() => router.push(redirectPath), 1000);
    } else if (!userExist && !user) {
      setTimeout(() => router.push(redirectPath), 1000);
    }
  }, [user, router, userExist, redirectPath]);
}
