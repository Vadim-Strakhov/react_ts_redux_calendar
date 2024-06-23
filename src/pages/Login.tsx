import LoginForm from "@src/components/LoginForm";
import { Card, Layout, Row } from "antd";
import { FC } from "react";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};
export default Login;
