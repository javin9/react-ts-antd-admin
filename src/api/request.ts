import axios, { AxiosError } from "axios";
import { message, notification } from "antd";
// 租户头字段

// 错误信息
const codeMessage: { [key: number]: string } = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

const request = axios.create({
  timeout: 30000,
  withCredentials: true,
});

export interface IResponse {
  stat: number;
  data: any;
  msg?: string;
  code?: number;
  traceId?: string;
}

request.interceptors.response.use(
  (response) => {
    const { msg, stat } = response.data;
    if (stat === 1) {
      return response.data.data;
    } else {
      message.error(msg);
      return Promise.reject(msg);
    }
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response && response.status) {
      const errorText = codeMessage[response.status] || response.statusText;
      const { status, config } = response;
      notification.error({
        message: `请求错误 ${status}: ${config.url}`,
        description: errorText,
      });
    } else if (!response) {
      notification.error({
        description: "客户端异常或网络问题，请清除缓存！",
        message: "状态异常",
      });
    }
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request;
