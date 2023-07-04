# @panda-design/extra

[![version](https://img.shields.io/npm/v/@panda-design/extra.svg?style=flat-square)](http://npm.im/@panda-design/extra)
[![npm downloads](https://img.shields.io/npm/dm/@panda-design/extra.svg?style=flat-square)](https://www.npmjs.com/package/@panda-design/extra)
[![MIT License](https://img.shields.io/npm/l/@panda-design/extra.svg?style=flat-square)](http://opensource.org/licenses/MIT)

Extra components and utils of [Panda Design](https://github.com/panda-design-team/components) which may have extra deps.

English | [中文](https://github.com/panda-design-team/extra/blob/main/docs/README-zh_CN.md)

# @panda-design/router

### 干嘛的？

与 `react-router-dom` 的 `data API` 联动，可以很方便的生成 `Breadcrumbs 面包屑` 和 `documentTitle 浏览器标签名`

### 为什么是一个单独的库？

此库额外依赖了 `react-router-dom` 作为 `peerDependencies`，可能会影响到主组件库的升级。

### 注意事项

`antd@5.3.2` + `react-router-dom@6.8.2` 是验证可行的。往上的版本可以自行测试，一般来说都是可以的，往下的版本也可以自行测试，一般不行。

## Get Started

- install

```bash
yarn add @panda-design/extra
```

- Build your application above `@panda-design/extra`

```typescript jsx
import {GaussianBackground} from '@panda-design/extra';

const App = () => {
    return <GaussianBackground>Hello there.</GaussianBackground>;
};
```

## Docs

[see StyleGuide made by this package](https://panda-design-team.github.io/)

also you may clone

```bash
git clone git@github.com:panda-design-team/panda-design-team.github.io.git
cd panda-design-team.github.io
yarn
yarn start
```

## Contribute

Feel free to raise issues and PR.
