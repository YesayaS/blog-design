import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useSignin() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function login(formData: object) {
    try {
      const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

      const response = await fetch(`${API_ENDPOINT}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseMessage = await response.json();

      if (!response.ok) {
        if (response.status === 401) setError(responseMessage.error);
        throw new Error(`${response.status}`);
      }
      setError("");
      //TODO: SAVE CREDS
      router.push("/");
    } catch (error: any) {
      console.error(error);
    }
  }

  async function signup() {}

  return {
    error,
    setError,
    login,
    signup,
  };
}
