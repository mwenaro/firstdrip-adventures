import axios from "axios";
import { headers } from "next/headers";

export const getData = async (path: string) => {
  try {
    // Await headers() because it's now async in Next.js 15
    const requestHeaders = await headers();
    const baseUrl = requestHeaders.get("x-url") || process.env.NEXTAUTH_URL;

    if (!baseUrl) {
      throw new Error(
        "Base URL is missing. Ensure x-url header or NEXTAUTH_URL is set."
      );
    }

    const formattedUrl = `${baseUrl}/api${path}`;
    console.log({ baseUrl, formattedUrl });

    const res = await axios.get(formattedUrl);

    return (await res?.data) || (await res?.data?.data) || [];
  } catch (error: any) {
    console.error("Error fetching data:", error?.message);
    return []; // Return an empty array on failure
  }
};
