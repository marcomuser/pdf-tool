import {
  SlAlert,
  SlButton,
  SlCard,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";
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
    <section>
      <form onSubmit={handleSubmit}>
        <SlCard>
          <h1 slot="header">Select your PDF</h1>
          <input type="file" accept=".pdf" onChange={handleChange} />
          <div
            slot="footer"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <SlButton variant="primary" type="submit">
              Next
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
