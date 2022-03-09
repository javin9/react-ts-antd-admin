/**
 * 代理配置 格式：
 *   {
 *     apiRegex {string} 接口的匹配路径 必填
 *     target  {string} 代理的目标地址 选填 如果不填，走默认地址
 *   }
 *
 *  提示：
 *   {
 *     apiRegex:"/admin/attribute/list"
 *   }
 *   如果没指定target，可以简写成  "/admin/attribute/list"
 *  例子：
 *  看下面的 attribute例子
 */

/**
 * 公共模块
 */
const commonMockApi = [
  {
    apiRegex: "/api/user",
    target: "http://yapi.xesv5.com/mock/1996", // 指向 主页对应的yapi，共用一个接口
  },
];

/**
 * 模块一 ：举个例子
 */
const attribute = [
  // 第一种写法；
  "/admin/demo1",
  // 第二种写法，和第一种等价
  {
    apiRegex: "/admin/demo2",
  },
  // 第三种写法，显示的生成代理地址
  {
    apiRegex: "/admin/attribute/list",
    target: "http://yapi.xesv5.com/mock/1996",
  },
];

module.exports = [...commonMockApi, ...attribute];
