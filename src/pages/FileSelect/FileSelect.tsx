import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

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
        <div>
          <h1>Select your PDF</h1>
          <input type="file" accept=".pdf" onChange={handleChange} />
          <div className={FooterStyles}>
            <button type="submit">Next</button>
          </div>
        </div>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </section>
  );
};

const FooterStyles = css`
  display: flex;
  justify-content: flex-end;
`;
