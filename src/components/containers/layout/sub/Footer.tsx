import React from "react";
import { Layout } from "antd";
import { CopyrightOutlined, HeartFilled } from "@ant-design/icons";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer>
      <span style={{ marginRight: "10px" }}>
        <CopyrightOutlined /> 2022
      </span>
      Make with <HeartFilled style={{ color: "red" }} /> by{" "}
      <a href="https://github.com/Zesysy">Sylène M.</a>{" "}
    </Footer>
  );
};

export default FooterComponent;
