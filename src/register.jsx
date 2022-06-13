import {AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select} from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"
const { Option } = Select;

const Register = () => {
  const [form] = Form.useForm();

  return (
    <Form
      className="register-form"
      form={form}
      name="register"
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
         <Link rules={[
          {
            required: true,
            message: "Please enter info in all fields!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === "" || getFieldValue("phone") === "" || getFieldValue("email") === "" || getFieldValue("confirm") === "" ) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("Please enter info in all fields!")
              );
            },
          }),
        ]}
        to="/login">Register
        </Link> 
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
