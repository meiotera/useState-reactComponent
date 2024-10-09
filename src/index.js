import React from "react";
import ReactDOM from "react-dom/client"; // Note que agora é react-dom/client
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o App na raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
