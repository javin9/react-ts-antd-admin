import { Breadcrumb, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import css from "./layout.module.scss";

import { FunctionComponent } from "react";
import AppLayoutHeader from "./AppLayoutHeader";
import AppLayoutSiderbar from "./AppLayoutSiderbar";

interface IAppLayoutProps {}

const AppLayout: FunctionComponent<IAppLayoutProps> = ({ children }) => {
  return (
    <Layout className={css.appLayout}>
      {/* header start */}
      <AppLayoutHeader />
      {/* header end */}
      {/* 下面主要区域 start */}
      <Layout className={css.appSubLayout}>
        {/* 侧边栏 */}
        <AppLayoutSiderbar />
        <Layout className={css.contentWrapper}>
          <Breadcrumb style={{ padding: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              borderRadius: "5px",
              padding: "24px",
              margin: "0 16px 16px",
              minHeight: 280,
              backgroundColor: "#fff",
            }}
          >
            {/* <Outlet /> */}
            {children}
          </Content>
        </Layout>
      </Layout>
      {/* 下面主要区域 end */}
    </Layout>
  );
};

export default AppLayout;
