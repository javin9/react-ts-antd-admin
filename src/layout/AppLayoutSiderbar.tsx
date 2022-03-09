import { Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import SubMenu from "antd/lib/menu/SubMenu";
import {
  FunctionComponent,
  Key,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import css from "./layout.module.scss";
import { getMenuList, IMenuNode } from "router/menu";
import { routes } from "router/routes";
import { AppstoreOutlined } from "@ant-design/icons";

interface IAppLayoutSiderbarProps {}

const AppLayoutSiderbar: FunctionComponent<IAppLayoutSiderbarProps> = () => {
  /** data  */
  // 左侧菜单栏
  const [menuList, setMenuList] = useState<IMenuNode[]>([]);
  //菜单折叠
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  /**  computed */
  //根节点submunkey
  const rootSubMenuKeys = useMemo(() => {
    return menuList.map((item) => item.key);
  }, [menuList]);

  /** mounted */
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const menuList = getMenuList(routes);
      setMenuList(menuList);
    }
  }, []);

  /**
   * 菜单组折叠
   * @param keys 打开的菜单
   */
  const onOpenChange = (keys: Key[]) => {
    const currentKeys = keys as string[];
    const latestOpenKey =
      currentKeys.find((key) => openKeys.indexOf(key) === -1) || "";

    if (rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(currentKeys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  /**
   * 点击根目录下面的菜单
   * @param deep {number} 层级深度
   */
  const onClickMenu = (deep: number) => {
    if (deep) {
      setOpenKeys([]);
    }
  };

  /**
   * 递归生成左侧菜单
   * @param menuList {IMenuNode[]}
   * @returns
   */
  const generateMenu = (menuList: IMenuNode[], deep: number) => {
    return (
      <>
        {menuList.map((menu) => {
          if (menu.menuChildren.length === 0) {
            return (
              <Menu.Item
                key={menu.key}
                onClick={() => {
                  onClickMenu(deep);
                }}
                icon={menu.icon || <AppstoreOutlined />}
              >
                <Link to={menu.key}>{menu.title}</Link>
              </Menu.Item>
            );
          } else {
            return (
              <SubMenu
                key={menu.key}
                title={menu.title}
                icon={menu.icon || <AppstoreOutlined />}
              >
                {generateMenu(menu.menuChildren, deep++)}
              </SubMenu>
            );
          }
        })}
      </>
    );
  };

  return (
    <div className={css.sibeBarSection}>
      <Sider>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ height: "100%", borderRight: 0 }}
        >
          {generateMenu(menuList, 0)}
        </Menu>
      </Sider>
    </div>
  );
};

export default AppLayoutSiderbar;
