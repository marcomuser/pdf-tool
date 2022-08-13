import { css } from "@emotion/css";
import { ReactNode } from "react";

interface TPageLayoutProps {
  children: ReactNode;
}

export const PageLayout = ({ children }: TPageLayoutProps) => (
  <main className={mainStyle}>{children}</main>
);

const mainStyle = css`
  height: 95vh;
  display: grid;
  place-items: center;
`;
