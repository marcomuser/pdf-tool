import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { PageLayout } from "./layouts/PageLayout";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter basename="/pdf-tool">
      <PageLayout>
        <App />
      </PageLayout>
    </BrowserRouter>
  </StrictMode>
);
