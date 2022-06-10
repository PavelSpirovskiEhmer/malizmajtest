import "./App.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet} from "react-router-dom";

// import Calendar from './calendar'

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="pageHeight">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }))}
          />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          ></Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            ></div>
            {/* <Calendar/> */}
            <Button>
              <Link to="/donated">Donate</Link>
            </Button>
          </Content>
          <Footer style={{ background: "grey" }}>
            <img src="malizmaj.png" alt="Zmaj" />
          </Footer>
        </Layout>
      </Layout>
      <Outlet />
    </div>
  );
}

export default App;
