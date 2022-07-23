import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { ChangeEvent, FormEvent, useState } from "react";

export const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return <p>That did not work</p>;
    }
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e, file);
  };

  return (
    <main
      style={{ display: "grid", placeItems: "center", textAlign: "center" }}
    >
      <form
        style={{ display: "flex", flexFlow: "column nowrap" }}
        onSubmit={handleSubmit}
      >
        <h1>Split PDF</h1>
        <input
          style={{ margin: "25px" }}
          type="file"
          accept=".pdf"
          onChange={handleChange}
        />
        <SlButton variant="primary" type="submit">
          Upload
        </SlButton>
      </form>
    </main>
  );
};
