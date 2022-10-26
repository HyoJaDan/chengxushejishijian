import type { LoaderFunction } from "@remix-run/node"; 
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/node";

export const loader: LoaderFunction = ({request}) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  console.log(code);
  return code;
};

export default function OAuthRedirectHandler() {
  /* const a = useLoaderData();
  console.log("aa", a);
   */
  return (
    <div>
      hello
    </div>
  );
}
