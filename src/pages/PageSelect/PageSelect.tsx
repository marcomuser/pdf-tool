import { SlButton, SlCard, SlInput } from "@shoelace-style/shoelace/dist/react";
import { useLocation, useNavigate } from "react-router-dom";

interface TState {
  file: File;
}

export const PageSelect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { file } = location.state as TState;

  return (
    <section>
      <form>
        <SlCard>
          <h1 slot="header">Select the pages to extract</h1>
          <h2>{file.name}</h2>
          <SlInput
            type="number"
            inputmode="numeric"
            label="From page"
          ></SlInput>
          <SlInput
            type="number"
            inputmode="numeric"
            label="To page (including)"
          ></SlInput>
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
