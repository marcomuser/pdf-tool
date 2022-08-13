import { Route, Routes } from "react-router-dom";
import { FileSelect } from "./pages/FileSelect/FileSelect";
import { PageSelect } from "./pages/PageSelect/PageSelect";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FileSelect />} />
      <Route path="/select-pages" element={<PageSelect />} />
    </Routes>
  );
};
