import { SlAlert, SlButton, SlIcon } from "@shoelace-style/shoelace/dist/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const FileSelect = () => {
  const [file, setFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      setErrorMessage("Could not select that PDF");
    } else {
      setErrorMessage(null);
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage("You need to select a PDF first");
    } else {
      navigate("/select-pages", { state: { file } });
    }
  };

  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        gap: "25px",
      }}
    >
      <form
        style={{ display: "flex", flexFlow: "column nowrap", gap: "25px" }}
        onSubmit={handleSubmit}
      >
        <h1>Select PDF</h1>
        <input type="file" accept=".pdf" onChange={handleChange} />
        <SlButton variant="primary" type="submit">
          Let&apos;s go!
        </SlButton>
      </form>
      <SlAlert open={Boolean(errorMessage)} variant="danger">
        <SlIcon slot="icon" name="info-circle" />
        {errorMessage}
      </SlAlert>
    </main>
  );
};
