import React from "react";
import { Menu } from "antd";
import { useHistory } from "react-router-dom";
import { HomeOutlined, TeamOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default ({}) => {
  const histiry = useHistory();

  const switchMenu = ({ keyPath }) => {
    histiry.push(keyPath.reverse().join("/"));
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={["1"]}
      mode="inline"
      onClick={switchMenu}
    >
      <Menu.Item key="/home" icon={<HomeOutlined />}>
        首页
      </Menu.Item>

      <SubMenu key="/user" icon={<TeamOutlined />} title="团队">
        <Menu.Item key="list">管理列表</Menu.Item>
        <Menu.Item key="statistic">统计图表</Menu.Item>
      </SubMenu>
    </Menu>
  );
};
