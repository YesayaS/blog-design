import { API_ENDPOINT } from "@@/utils/apis";

export default async function fetchAPI(url: string, options: any) {
  try {
    const response = await fetch(`${API_ENDPOINT}${url}`, options);

    if (!response.ok) {
      const errorResponse = await response.json();
      throw errorResponse;
    }

    const responseData = await response.json();
    return { response: responseData, error: null };
  } catch (error: any) {
    return { response: null, error };
  }
}
