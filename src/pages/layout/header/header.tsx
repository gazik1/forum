import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";

import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const menuItems: MenuProps["items"] = [
  { key: "posts", label: `Посты` },
  { key: "users", label: `Пользователи` },
];

const HeaderApp = () => {
  const navigation =useNavigate()
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["posts"]}
          items={menuItems}
          onClick={(el) => {
            navigation(el.key)
          }}
          style={{ flex: 1, minWidth: 0 }}
        
        />
      </Header>
    </Layout>
  );
};
export default HeaderApp;
