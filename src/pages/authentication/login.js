import React from 'react';
import { LockOutlined, UserOutlined, SmileTwoTone, RightOutlined, GoogleOutlined } from '@ant-design/icons';
import { Avatar, Divider, Button, Form, Input, Image, Row, Col, Space } from 'antd';

const logo = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';


const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>

            <Row align="middle" justify="center" style={{ minHeight: '95vh', padding: '0 50px' }}>
                <Col span={11}>

                    <div style={{ width: 579, height: 841 }}>
                        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                            <Avatar src={logo} style={{ margin: '50px 10px 30px 0' }} />

                            <div>
                                <p>WELCOME BACK <SmileTwoTone /> </p>
                                <h1>Continue to your Account.</h1>
                            </div>

                            <Button type="primary" shape="round" icon={<GoogleOutlined />} size='large' block style={{ backgroundColor: 'rgba(227, 243, 251, 1)', color: 'black' }}>
                                Log in with Google
                            </Button>

                            <Divider plain>Or use Email</Divider>

                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Email!',
                                        },
                                        {
                                            type: 'email',
                                            message: 'Please enter a valid email address!',
                                        },
                                    ]}
                                >
                                    <Input
                                        prefix={<UserOutlined
                                            className="site-form-item-icon" />}
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
                                            message: 'Please input your Password!',
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
                                    <Button type="primary" htmlType="submit" className="login-form-button" block size='large' style={{ backgroundColor: 'rgba(47, 53, 56, 1)' }}>
                                        Log in <RightOutlined />
                                    </Button>
                                </Form.Item>
                                <Col span={24} style={{ textAlign: 'center', marginTop: 16 }}>
                                    <Form.Item >
                                        Are you a Newbie? <a href="./#">register now!</a>
                                    </Form.Item>
                                </Col>
                            </Form>
                        </Space>
                    </div>
                </Col>
                <Col
                    span={24} md={9}
                // style={{ display: { xs: 'none', md: 'block' } }} // hide on small screens
                // responsive={{ xs: false, md: true }} // show on medium screens and above
                >
                    <Image
                        src={'#'}
                        // src={require('../assets/images/login.jpg')}
                        className="img-fluid"
                        alt='login'
                        style={{ width: '100%' }}
                        minHeight={'95vh'}
                        preview={false}

                    />
                </Col>

            </Row>
        </div>
    );
};

export default Login;