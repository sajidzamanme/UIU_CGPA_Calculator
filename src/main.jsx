import { Analytics } from "@vercel/analytics/react"
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>
);
