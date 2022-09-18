import React from "react";
import { Card, Typography } from "antd";

import "./views.less";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Card className="custom-card">
        <Title>Bienvenue sur My Virtual Envelopes</Title>
        <Title level={2}>Qu'est-ce que les enveloppes budget ?</Title>
        <Title level={2}>Pourquoi utiliser MVE ?</Title>
      </Card>
    </>
  );
};

export default Home;
