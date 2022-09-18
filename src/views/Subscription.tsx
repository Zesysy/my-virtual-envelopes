import React from "react";
import { Card, Button, Form, Input, InputNumber, Typography } from "antd";

import "./views.less";

const { Title } = Typography;

const Subscription = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} est recquis!",
    types: {
      email: "${label} n'est pas un email valide !",
      number: "${label} n'est pas un nombre valide !",
    },
    number: {
      range: "${label} doit être entre ${min} et ${max}",
    },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Card className="custom-card">
      <Title level={3}>Formulaire d'inscription</Title>

      <Form
        {...layout}
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Prénom / Surnom"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
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
              message: "S'il vous plaît, renseignez un mot de passe !",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Âge"
          rules={[{ required: true, type: "number", min: 18, max: 99 }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name={["user", "nbEnvelopes"]}
          label="Nombre d'enveloppes"
          rules={[{ type: "number", min: 0, max: 99 }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Enregistrer
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Subscription;
