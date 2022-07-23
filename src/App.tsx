import { Route, Routes } from "react-router-dom";
import { UploadForm } from "./pages/landing/UploadForm";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

export const App = () => {
  setBasePath(
    "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.78/dist/"
  );

  return (
    <Routes>
      <Route path="/" element={<UploadForm />} />
    </Routes>
  );
};
