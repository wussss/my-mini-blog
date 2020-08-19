# 文件目录

// 使用 git eject 暴露出来的 react 项目配置文件
## config
## scripts

//一个高性能的 HTTP 和反向代理 web 服务器,部署项目时用
## nginx
//所有依赖包

## node_modules
// 项目静态文件，create-react-app 时生成

## public
favicon.ico 网址栏 logo


//业务逻辑，项目源码
## src

index.tsx // 项目入口文件
App.tsx //主组件
style.ts //全局样式



### Api 后端接口


### components 所有页面都会用到的组件
spincenter 加载中

### containers 定义页面基本结构，以及注册、登录等弹窗的组件

Frame/header搜索栏、Myavatar头像下拉框、Login登录、Register注册、Main主要内容

AuthRoute  路由

RouteErrorBoundary  页面加载错误时的页面

### lib 各种可能会用到的方法
hooks  hooks方法
utils 其它方法

### model 外部模块，变量类型定义
dto 数据传输对象  entities 命名实体  interfaces 接口变量类型

### pages 各页面业务逻辑
home 主页
post 文章详情页
settings 修改个人信息
editor 编辑器

### redux state 定义与管理
context.ts //定义 store
reducer.ts //定义 action（type、payload)

### routes 定义页面跳转

### statics 静态文件（图片、iconfont 等）

// ts 类型配置文件
## typings
global.d.ts  //ts 声明文件，在 JavaScript 里提供了很多库的使用方法，需要书写声明文件去匹配它



## 其它文件

//git 忽略文件，这里定义的内容发生更改不会上传到 git
### .gitignore

//Prettier 配置文件,代码格式化
### .prettierrc

// 一个用来构建镜像的文本文件，文本内容包含了多条构建镜像所需的指令和说明
### Dockerfile

//项目描述信息，包括依赖包版本等，项目运行开始的文件
### package.json


//防止依赖包自动更新，用 npm 安装
### package-lock.json



// ts 配置文件，通过 tsc --init 命令生成
### tsconfig.json

//ts 格式验证工具，需先安装 yarn add tslint typescript
### tslint.json

////防止依赖包自动更新，用 yarn 安装
### yarn.lock

//依赖包安装报错信息
### yarn-error.log
