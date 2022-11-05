
import type{ CSSProperties } from "react";


export function loadSdk() {
  return new Promise((resolve) => {
    const js: HTMLScriptElement =  document.createElement("script");

    js.id = "kakao-sdk";
    js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
    js.onload = resolve;

    document.body.append(js);
  });
}
export const DEFAULT_STYLE: CSSProperties = {
  width: "463px",
  height: "80px",
  backgroundColor: "#FFE459",
  borderRadius:"15px",
  display: "flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems:"center",
};