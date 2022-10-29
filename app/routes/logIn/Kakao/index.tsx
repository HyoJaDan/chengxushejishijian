import type { LoaderFunction } from "@remix-run/node"; 
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  return code;
};

export default function OAuthRedirectHandler() {
  const code = useLoaderData();
  console.log(code);
  return (
    <div>
      안녕하세요.
    </div>
  );
}