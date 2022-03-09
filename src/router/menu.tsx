import { IRouteSettings } from "./routes";
import { ReactNode } from "react";

export interface IMenuNode {
  // 标题
  title: string;
  key: string;
  // 路径
  menuPath: string;
  // 子节点
  menuChildren: IMenuNode[];
  icon?: ReactNode;
}

/**
 * 获取菜单列表
 */
export const getMenuList = (routes: IRouteSettings[]) => {
  return routes
    .filter((item) => item.meta && item.meta.title)
    .map((item) => extractMenuNode(item, null));
};

/**
 * 提取菜单节点
 * @param route {IRouteSettings}
 * @param parent {IRouteSettings|null}
 * @returns IMenuNode
 */
export function extractMenuNode(
  route: IRouteSettings,
  parent: IRouteSettings | null
): IMenuNode {
  const { meta, children = [], index = false, path } = route;
  const title = meta?.title || "未知";
  const icon = meta?.icon;

  const menuPath = (index && parent ? parent.path : path) as string;
  const key = index ? `${menuPath}-index` : menuPath;

  const menuChildren = children
    .filter((item) => item.meta && item.meta.title)
    .map((item) => extractMenuNode(item, route));

  return {
    title,
    key,
    menuPath: menuPath as string,
    menuChildren,
    icon,
  };
}
