import {
  SlAlert,
  SlButton,
  SlCard,
  SlIcon,
  SlInput,
} from "@shoelace-style/shoelace/dist/react";
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
    e: Event,
    set: Dispatch<React.SetStateAction<string>>
  ) => {
    const { value } = e.target as EventTarget & HTMLInputElement;
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
        <SlCard>
          <h1 slot="header">Select the pages to extract</h1>
          <h2>{file.name}</h2>
          <SlInput
            onSlInput={(e) => {
              handleChange(e, setFromValue);
            }}
            value={fromValue}
            type="number"
            inputmode="numeric"
            label="From"
            placeholder="from page..."
            required
          >
            <SlIcon slot="prefix" name="123"></SlIcon>
          </SlInput>
          <SlInput
            onSlInput={(e) => {
              handleChange(e, setToValue);
            }}
            value={toValue}
            type="number"
            inputmode="numeric"
            label="To (including)"
            placeholder="to page..."
            required
          >
            <SlIcon slot="prefix" name="123"></SlIcon>
          </SlInput>
          <div
            slot="footer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <SlButton variant="default" onClick={() => navigate("/")}>
              Back
            </SlButton>
            <SlButton variant="primary" type="submit">
              Get PDF
            </SlButton>
          </div>
        </SlCard>
      </form>
      <SlAlert open={Boolean(errorMessage)} variant="danger">
        <SlIcon slot="icon" name="info-circle" />
        {errorMessage}
      </SlAlert>
    </section>
  );
};
