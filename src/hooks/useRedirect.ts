import { useRouter } from "next/navigation";

export default function useRedirectUser() {
  const router = useRouter();

  const redirect = (routes: string) => {
    setTimeout(() => {
      router.push(routes);
    }, 1000);
  };
  return redirect;
}
