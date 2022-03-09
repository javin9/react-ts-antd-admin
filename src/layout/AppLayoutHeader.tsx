import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { FunctionComponent } from "react";
import css from "./layout.module.scss";

interface IAppLayoutHeaderProps {}

/**
 * 头部组件
 * @returns
 */
const AppLayoutHeader: FunctionComponent<IAppLayoutHeaderProps> = () => {
  return (
    <Header className={css.appHeader}>
      <div className={css.logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppLayoutHeader;
