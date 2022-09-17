import React from "react";
import { Layout } from "antd";

import "./layout.css";
import { Header, Footer } from "./sub";

const { Content } = Layout;

const LayoutContainer = () => {
  return (
    <Layout>
      <Header />
      <Content>Content</Content>
      <Footer />
    </Layout>
  );
};

export default LayoutContainer;
