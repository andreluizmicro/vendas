import React from 'react';
import { LoginArea } from './styled';
import { Form, Input, Button, Checkbox } from 'antd';

import { PageContainer, PageTitle } from '../../components/MainComponents';

const Login = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <PageContainer>
          <LoginArea>
            <PageTitle>Faça seu login</PageTitle>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                label="E-mail"
                name="email"
                rules={[{ required: true, message: 'Por favor informe o e-mail!' }]}
                >
                <Input />
                </Form.Item>
        
                <Form.Item
                label="Senha"
                name="password"
                rules={[{ required: true, message: 'Por favor informe uma senha!' }]}
                >
                <Input.Password />
                </Form.Item>
        
                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Lembrar senha</Checkbox>
                </Form.Item>
        
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Fazer login
                </Button>
                </Form.Item>
            </Form>
        </LoginArea>
      </PageContainer>  
    );
  };

  export default Login;