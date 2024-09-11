import  Header  from "../header/header";
import  Footer  from "../footer/footer";
import { Outlet } from "react-router-dom";
import {  Layout, theme } from 'antd';

const {Content } = Layout;

 const LayoutApp = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

  return (
    <>
      <Header />

      <Content style={{ padding: "0 48px" }}>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content style={{ padding: "0 24px", minHeight: 280 ,width:"100%", maxWidth:900,margin:"0 auto" }}>
            <Outlet />
          </Content>
        </Layout>
      </Content>

      <Footer />
    </>
  );
};

export default LayoutApp