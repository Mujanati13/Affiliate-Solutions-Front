import React from "react";
import {
  LockOutlined,
  UserOutlined,
  RightOutlined,
  GoogleOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Divider,
  Button,
  Form,
  Input,
  Row,
  Col,
  Space,
  Image,
} from "antd";
const logo =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

const Register = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <Row
        align="middle"
        justify="center"
        style={{ minHeight: "95vh", padding: "0 50px" }}
      >
        <Col span={24} md={11}>
          <div style={{ width: 579, height: 841 }}>
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <Avatar src={logo} style={{ margin: "50px 10px 30px 0" }} />

              <div>
                <h1>Start Your 14-Day Free Trial Today..</h1>
                <p>NO CREDIT CARD REQUIRED!</p>
              </div>

              <Button
                type="primary"
                shape="round"
                icon={<GoogleOutlined />}
                size="large"
                block
                style={{
                  backgroundColor: "rgba(227, 243, 251, 1)",
                  color: "black",
                }}
              >
                Sign up with Google
              </Button>

              <Divider plain>Or use Email</Divider>

              <Form
                name="normal_register"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                    size="large"
                    variant="filled"
                  />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Email!",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email address!",
                    },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                    size="large"
                    variant="filled"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    size="large"
                    variant="filled"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    block
                    size="large"
                    style={{ backgroundColor: "rgba(47, 53, 56, 1)" }}
                  >
                    Sign up <RightOutlined />
                  </Button>
                  <p style={{ color: "rgba(117, 117, 117, 1)" }}>
                    By Signing up to uBrand, means you agree to our Privacy
                    Policy and Terms of Service
                  </p>
                </Form.Item>
                <Col span={24} style={{ textAlign: "center", marginTop: 16 }}>
                  <Form.Item>
                    Already have an account? <a href="./#">LogIn!</a>
                  </Form.Item>
                </Col>
              </Form>
            </Space>
          </div>
        </Col>
        <Col
          span={24}
          md={9}
        >
          <Image
            src={"../../assets/images/SignIn.jpg"}
            className="img-fluid"
            alt="login"
            style={{ width: "100%" }}
            minHeight={"95vh"}
            preview={false}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
