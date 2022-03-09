import { RouteObject } from "react-router-dom";

import CoursesDetailPage from "page/Courses/CoursesDetailPage";
import CoursesIndexPage from "page/Courses/CoursesIndexPage";
import CoursesLayoutPage from "page/Courses/CoursesLayoutPage";
import CoursesUserPage from "page/Courses/CoursesUserPage";
import HomePage from "page/Home/HomePage";
import NotFound from "page/NotFound";
import { ReactNode } from "react";

import { AppstoreOutlined } from "@ant-design/icons";
import AccountCenterPage from "page/Account/AccountCenterPage";
import AccountSettingsPage from "page/Account/AccountSettingsPage";

export interface IRouteSettings extends RouteObject {
  children?: IRouteSettings[];
  meta?: {
    // 标题
    title: string;
    icon?: ReactNode;
    [propName: string]: any;
  };
}

/**
 * 路由注册
 */
export const routes: IRouteSettings[] = [
  {
    path: "/dashboard",
    index: true,
    element: <HomePage />,
    meta: {
      title: "Dashboard",
      icon: <AppstoreOutlined />,
    },
  },
  {
    path: "/courses",
    element: <CoursesLayoutPage />,
    meta: {
      title: "课程管理",
      icon: <AppstoreOutlined />,
    },
    children: [
      {
        index: true,
        element: <CoursesIndexPage />,
        meta: {
          title: "课程列表",
          icon: <AppstoreOutlined />,
        },
      },
      {
        path: "/courses/:id",
        element: <CoursesDetailPage />,
      },
      {
        path: "/courses/users",
        element: <CoursesUserPage />,
        meta: {
          title: "课程用户",
          icon: <AppstoreOutlined />,
        },
      },
    ],
  },
  {
    path: "/account",
    meta: {
      key: "account",
      title: "个人页",
    },
    children: [
      {
        index: true,
        element: <AccountCenterPage />,
        meta: {
          title: "个人中心",
        },
      },
      {
        path: "/account/settings",
        element: <AccountSettingsPage />,
        meta: {
          title: "个人设置",
        },
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
