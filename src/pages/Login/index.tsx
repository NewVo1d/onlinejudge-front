import React from 'react';
import { Button, Card, Col, Form, Row } from '@douyinfe/semi-ui';
import { useMemoizedFn } from 'ahooks';
import Title from './title';
import './styles/index.css';
import { userStore } from '../../common/userStore';
import { useNavigate } from 'oh-router-react';

function Login() {
  const { Input } = Form;
  const navigate = useNavigate();

  const handlerSubmit = useMemoizedFn(async (values) => {
    await userStore.login(values.email, values.password);
    navigate('/');
  });

  return (
    <Row type="flex" justify="space-around" align="middle">
      <Card header={<Title />} className="login-card">
        <Form onSubmit={(values: any) => handlerSubmit(values)}>
          <Input field="email" label="Email" placeholder="Enter your email"></Input>
          <Input field="password" label="Password" placeholder="Enter your password"></Input>
          <Button htmlType="submit" block theme="solid" type="primary">
            Sign in
          </Button>
          <Row type="flex" justify="space-between" align="middle">
            <Col>
              <Button theme="borderless" className="button-cursor">
                Sign up
              </Button>
            </Col>
            <Col>
              <Button theme="borderless" className="button-cursor">
                Forget Passsword
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Row>
  );
}

export default Login;
