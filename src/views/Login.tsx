import React from "react";
import { Card, Button, Form, Input, Typography } from "antd";

import "./views.less";

const { Title } = Typography;

const Login = () => {
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} est recquis!",
    types: {
      email: "${label} n'est pas un email valide !",
    },
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card className="custom-card">
      <Title level={3}>Connexion</Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mot de passe"
          name="password"
          rules={[
            {
              required: true,
              message: "S'il vous plaît, entrez votre mot de passe !",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Valider
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
