import { StrictMode } from "react";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EnergyProvider } from "./context/EnergyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EnergyProvider>
      <App />
    </EnergyProvider>
  </React.StrictMode>
);
