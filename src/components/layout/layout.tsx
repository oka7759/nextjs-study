import React, { ReactNode } from "react";
import MainHeader from "./mainHeader";

type LayoutProps = {
  children: ReactNode[] | ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
