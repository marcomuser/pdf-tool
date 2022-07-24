import {
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

  const handleChange = (
    e: Event,
    set: Dispatch<React.SetStateAction<string>>
  ) => {
    const { value } = e.target as EventTarget & HTMLInputElement;
    if (value) {
      set(value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(fromValue, toValue);
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
    </section>
  );
};
