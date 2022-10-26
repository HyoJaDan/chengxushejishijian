import { useEffect } from "react";

export const useScript = (url: string, onload: any) => {
  useEffect(() => {
    console.log("url", url);
    console.log("onload", onload);
    let script = document.createElement("script");
<<<<<<< HEAD
=======

>>>>>>> 1f94979 (Done GoogleLogIn)
    script.src = url;
    script.onload = onload;

    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, [url, onload]);
}
export default useScript;