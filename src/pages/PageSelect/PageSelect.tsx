import { useLocation } from "react-router-dom";

type TState = {
  file: File;
};

export const PageSelect = () => {
  const location = useLocation();
  const { file } = location.state as TState;
  return <p>{file.name}</p>;
};
