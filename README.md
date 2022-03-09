# 开箱即用的中台前端解决方案

## 技术栈

- React+TS+Hooks

## 安装依赖

```bash
npm i
```

## 本地开发

```bash
npm run dev
# 或者
yarn dev
```

## 样式

支持 less 和 sass，但是文件名有格式要求  
格式：`[文件名].module.less`

## Mock 数据

mock 数据使用的 yapi，如果没有权限 请联系 `liujianwei1` 开通  
配置路径
`/config/dev-server`

## 环境文件

- .env.development：本地开发环境，连接到 Yapi 的 Mock 数据
- .env.development.online：本地开发环境，连接到生产环境数据
- .env.production：生产环境
- .env.test.production 测试环境

## 拓展知识点

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [react-query](https://react-query.tanstack.com/quick-start)
- [react-use](https://github.com/streamich/react-use)
- [react-error-boundary](https://github.com/bvaughn/react-error-boundary)
- [react-helmet](https://github.com/nfl/react-helmet)
- [dayjs](https://github.com/iamkun/dayjs)
- [why-did-you-render](https://github.com/welldone-software/why-did-you-render)
- [React Hooks 中父组件中调用子组件方法](https://www.cnblogs.com/muamaker/p/11647626.html)
- [css-module](https://github.com/css-modules/css-modules)
- [如何在 React + TypeScript 声明带有 children 的 Props](https://mp.weixin.qq.com/s?__biz=MzI0NzMzMDI3Ng==&mid=2247483893&idx=1&sn=3d0872f157a1bbfab8f8be978a436d7c&chksm=e9b0e57edec76c68c1de2a596a06c625262658dcd24bcb7044b604aeb3786431c66a89121c5d&token=386853759&lang=zh_CN#rd)

946705591

## SSO

[sso 接入文档]https://service.100tal.com/new/app/list/my
