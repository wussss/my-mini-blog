<<<<<<< HEAD
# 文件目录



// 项目静态文件，create-react-app时生成
## public

//业务逻辑，项目源码
## src
index.tsx  // 项目入口文件
App.tsx  //主组件
style.ts //全局样式



### Api  后端接口


### components  所有页面都会用到的组件

### containers 定义页面基本结构，以及注册、登录等弹窗的组件

Frame/header、Login、Register、Main

AuthRate

RouteErrorBoundary


### lib  各种可能会用到的方法

### madal 

### pages   各页面业务逻辑
home 主页


### redux   state定义与管理
context.ts    //定义store
reducer.ts  //定义action

### routes  定义页面跳转


### statics   静态文件（图片、iconfont等）





// ts 类型配置文件
## typings
global.d.ts //ts声明文件，在JavaScript里提供了很多库的使用方法，需要书写声明文件去匹配它们



// 使用git eject 暴露出来的react项目配置文件
## config
## scipts 

//所有依赖包
## node_modules 

## nginx一个高性能的HTTP和反向代理web服务器,部署项目时用

## 其它文件

//git忽略文件，这里定义的内容发生更改不会上传到git
### .gitignore  

//Prettier配置文件,代码格式化
### .prettierrc
xw
// 一个用来构建镜像的文本文件，文本内容包含了多条构建镜像所需的指令和说明
### Dockerfile

//项目描述信息，包括依赖包版本等，项目运行开始的文件
### package.json

//防止依赖包自动更新，用npm安装
### package-lock.json

// ts配置文件，通过 tsc --init命令生成
### tsconfig.json

//ts格式验证工具，需先安装yarn add tslint typescript
### tslint.json

////防止依赖包自动更新，用yarn安装
### yarn.lock

//依赖包安装报错信息
### yarn-error.log
=======
# my-mini-blog
a micro-blog of myself
>>>>>>> 7d17a87d7d440c3f0fe6a10a85f3674258a2534d
