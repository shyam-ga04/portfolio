import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LINKS } from "./constants/link";

const fontLinkId = "poppins-font-stylesheet";
if (!document.getElementById(fontLinkId)) {
  const linkTag = document.createElement("link");
  linkTag.id = fontLinkId;
  linkTag.rel = "stylesheet";
  linkTag.href = LINKS.poppinsFontStylesheet;
  document.head.appendChild(linkTag);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

