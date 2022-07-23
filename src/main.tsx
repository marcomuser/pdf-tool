import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { MainLayout } from "./layouts/MainLayout";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout>
        <App />
      </MainLayout>
    </BrowserRouter>
  </StrictMode>
);
