import { ReactNode } from "react";

interface TMainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: TMainLayoutProps) => (
  <main style={{ height: "95vh", display: "grid", placeItems: "center" }}>
    {children}
  </main>
);
