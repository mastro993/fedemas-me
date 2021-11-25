import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./Providers";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebase-config.json"

const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById("root"),
);

