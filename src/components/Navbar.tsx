import { useActions } from "@src/hooks/useActions";
import { useTypedSelector } from "@src/hooks/useTypedSelector";
import { RouteNames } from "@src/routes";
import { Layout, Menu, Row } from "antd";
import { FC } from "react";
import { useHistory } from "react-router-dom";

const Navbar: FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.auth);

  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item key={1} onClick={logout}>
                Выйти
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item
              key={1}
              style={{ width: 100 }}
              onClick={() => router.push(RouteNames.LOGIN)}
            >
              Логин
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};
export default Navbar;
