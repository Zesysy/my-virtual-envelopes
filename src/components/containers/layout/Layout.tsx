import React from "react";
import { Layout } from "antd";

import "./layout.css";

const { Header, Footer, Content } = Layout;

const LayoutContainer = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default LayoutContainer;
