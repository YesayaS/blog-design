import { useRouter } from "next/navigation";
import { useEffect } from "react";

import useAuth from "@@/hooks/useAuth";

export default function useRedirectProtectedRoutes(
  userExist: boolean,
  redirectRoutes: string,
) {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (userExist && user) {
      setTimeout(() => router.push(redirectRoutes), 1000);
    } else if (!userExist && !user) {
      setTimeout(() => router.push(redirectRoutes), 1000);
    }
  }, [user, router, userExist, redirectRoutes]);
}
