import React from "react";
import { Layout, Menu } from "antd";
import {
  LoginOutlined,
  HomeOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.Item
          onClick={() => navigate("/")}
          key="home"
          icon={<HomeOutlined />}
        >
          Accueil
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate("/subscription")}
          key="subscription"
          icon={<UserAddOutlined />}
        >
          Inscription
        </Menu.Item>
        <Menu.Item
          onClick={() => navigate("/login")}
          key="login"
          icon={<LoginOutlined />}
        />
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
