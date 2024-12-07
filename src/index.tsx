import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import firebaseConfig from "./firebase-config.json";

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
