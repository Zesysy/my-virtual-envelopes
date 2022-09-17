import React from "react";
import { Layout } from "antd";

import "./layout.css";
import { Header, Footer } from "./sub";

const { Content } = Layout;

const Loading = () => <p>Chargement ...</p>;

const LayoutContainer = ({ children }: { children: any }) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Layout>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </React.Suspense>
  );
};

export default LayoutContainer;
