import React from "react";
import { Layout, Menu } from "antd";
import {
  LoginOutlined,
  HomeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header>
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Accueil
        </Menu.Item>
        <Menu.Item key="subscription" icon={<UserAddOutlined />}>
          Inscription
        </Menu.Item>
        <Menu.Item key="login" icon={<LoginOutlined />} />
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
