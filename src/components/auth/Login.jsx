import { Button, Checkbox, Drawer, Flex, Form, Input } from "antd";
import Link from "antd/es/typography/Link";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Register from "./Register";

function Login({ setOpenLogin }) {
  const [openRegister, setOpenRegister] = useState(false);

  const handleRegisterDrawer = () => {
    setOpenLogin(false);
    setOpenRegister(!openRegister);
  };
  const onCloseRegister = () => {
    setOpenRegister(false);
  };

  return (
    <>
      <Form
       
        name="Login"
        labelCol={{
          span: 8,
        }}
        style={{ width: "100%" }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Flex gap={"small"}>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Login
            </Button>
            <Button onClick={handleRegisterDrawer} style={{ width: "100%" }}>
              Register
            </Button>
          </Flex>
        </Form.Item>
      </Form>
      <Drawer
        title="Register Account"
        placement="right"
        closable={true}
        onClose={onCloseRegister}
        open={openRegister}
      >
        <Register />
      </Drawer>
    </>
  );
}

export default Login;
