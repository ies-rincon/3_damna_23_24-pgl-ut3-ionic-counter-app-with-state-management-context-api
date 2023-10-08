import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CounterProvider } from "./context/CounterContext";
import { LanguageAppProvider } from "./context/LanguageAppContext";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <LanguageAppProvider>
      <CounterProvider>
        <App />
      </CounterProvider>
    </LanguageAppProvider>
  </React.StrictMode>
);
