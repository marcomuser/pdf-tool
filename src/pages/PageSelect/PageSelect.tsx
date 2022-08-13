import type { Dispatch, FormEvent } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TState {
  file: File;
}

export const PageSelect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { file } = location.state as TState;

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    set: Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    const { value } = e.target;
    if (value) {
      set(value);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const { extractPages } = await import("../../utils/extractPages");
      const pdfFile = await extractPages(file, fromValue, toValue);
      const blobUrl = URL.createObjectURL(pdfFile);
      window.location.href = blobUrl;
    } catch (err) {
      const { message } = err as Error;
      if (message) {
        setErrorMessage(message);
      } else {
        console.error(err);
      }
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <h1 slot="header">Select the pages to extract</h1>
          <h2>{file.name}</h2>
          <input
            onChange={(e) => {
              handleChange(e, setFromValue);
            }}
            value={fromValue}
            type="number"
            inputMode="numeric"
            placeholder="from page..."
            required
          ></input>
          <input
            onChange={(e) => {
              handleChange(e, setToValue);
            }}
            value={toValue}
            type="number"
            inputMode="numeric"
            placeholder="to page..."
            required
          ></input>
          <div
            slot="footer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <button onClick={() => navigate("/")}>Back</button>
            <button>Get PDF</button>
          </div>
        </div>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </section>
  );
};
