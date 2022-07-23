import { SlButton, SlCard } from "@shoelace-style/shoelace/dist/react";
import { useLocation } from "react-router-dom";

interface TState {
  file: File;
}

export const PageSelect = () => {
  const location = useLocation();
  const { file } = location.state as TState;
  console.log(file);

  return (
    <section>
      <form>
        <SlCard>
          <h1 slot="header">Select the pages to extract</h1>
          <input type="text" />
          <SlButton slot="footer" variant="primary" type="submit">
            Download your PDF
          </SlButton>
        </SlCard>
      </form>
    </section>
  );
};
