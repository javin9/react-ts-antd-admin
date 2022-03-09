// yapi代理的接口列表

const proxyTable = require("./proxy-table");

// 默认的代理地址
const defaultMockApi = {
  "/api": {
    target: "https://app.xesv5.com",
    ws: false,
    changeOrigin: true,
  },
};

/**
 * @desc: 生成yapi的proxy
 */
// 默认地址
const defaultProxyTarget = "https://yapi.xesv5.com/mock/1996";
const createYapiMockProxy = () => {
  let obj = {};
  proxyTable.forEach((proxySetting) => {
    let apiRegex = "";
    let target = defaultProxyTarget;

    // 如果是字符串，直接复制
    if (typeof proxySetting === "string") {
      apiRegex = proxySetting;
    } else {
      apiRegex = proxySetting.apiRegex;
      target = proxySetting.target || defaultProxyTarget;
    }

    obj[apiRegex] = {
      target,
      ws: false,
      changeOrigin: true,
    };
  });
  return obj;
};

// yapi mock数据
const yapiMockProxy = !process.env.REACT_APP_DEV_ONLINE
  ? createYapiMockProxy()
  : defaultMockApi;

console.log(JSON.stringify(yapiMockProxy));

module.exports = {
  ...yapiMockProxy,
};
