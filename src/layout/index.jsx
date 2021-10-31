/**
 * 布局文件入口
 */
import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb } from "antd";
import {useLocation} from 'react-router-dom'
import SideBarMenu from "./sidebarMenu";

import "./index.less";
const { Header, Content, Footer, Sider } = Layout;

export default function ({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [breads, setBreads] = useState(["home"]);
  const location = useLocation();

  useEffect(()=>{
    // const list = location.path.split('/');
    // setBreads(list);
  }, [location]);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <SideBarMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
          123
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {breads.map((item) => (
              <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div className="site-layout-background site-layout-content">
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          盛丰 ©2018 Created by LGH
        </Footer>
      </Layout>
    </Layout>
  );
}
