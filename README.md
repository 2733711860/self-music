# vue 移动端模板

#### 启动项目
1. npm i 安装依赖
1. npm run serve 或 npm run dev 启动项目



>#### 核心知识体系简介

1. vue-cli3 脚手架
    * 创建项目
    * 开发环境和生产环境配置
    * 配置跨域

2. vue-router 路由
    * 路由配置
    * 子路由配置
    * 路由守卫，设置页面标题和根据登录状态判断是否允许进入特定页面
    * 对router-link使用active-class,高亮当前路由

3. vuex 跨组件通信
    * vuex 配置
    * vuex 持久化
    * vuex 使用

4. rem 移动端适配
    * 通过 amfe-flexibe 设置 root 元素的字体大小
    * 通过 pxtorem 把 px 转成 rem, 无需手动书写 rem

5. axios 配置
    * 使用拦截器配置 baseURL 和给请求头加上 token
    * 使用拦截器对返回的数据进行处理
    * 挂载到 vue 原型上，方便使用

6. promise 使用

    * 在项目中使用 async await 把异步变成同步，编写和阅读更舒服

7. 有赞 vant-ui 库
    * 导航栏
    * 单元格
    * loading
    * ......

8. 使用keep-alive组件缓存某些组件(新增)

9. 添加小型服务器接口,用来编写本项目所需接口



>####  vue-cli3 脚手架
1. 具体操作,请移步[vue-cli3文档官网]( [https://cli.vuejs.org/zh/guide/installation.html](https://links.jianshu.com/go?to=https%3A%2F%2Fcli.vuejs.org%2Fzh%2Fguide%2Finstallation.html)
)
2. **开发环境和生产环境配置**
  * 根目录新建两文件 .env.development => 开发环境配置  .env.production => 生产环境配置
![image.png](https://upload-images.jianshu.io/upload_images/7177443-4f2c42f1c1bc4439.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
文件内容

```
// .env.development
VUE_APP_URL="https://www.easy-mock.com/mock/5cd62747d3a84206275d58d1/huruqing/api"
```

```
// .env.production
VUE_APP_URL="https://www.easy-mock.com/mock/5cd62747d3a84206275d58d1/huruqing/api"
```

3. **package.json 配置**
vue-cli3默认已经给你配置好了model, 开发环境对应development, 生产环境对应production,如果你不知道model,请移步[webpack文档官网]([https://www.webpackjs.com/](https://www.webpackjs.com/)
)
![image.png](https://upload-images.jianshu.io/upload_images/7177443-5e9e447da363cfca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. 在你的项目中，通过  process.env.VUE_APP_URL 可以访问到你在环境配置文件中设置的变量
![](https://upload-images.jianshu.io/upload_images/7177443-d585aa842e655950.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![开发环境中的变量](https://upload-images.jianshu.io/upload_images/7177443-02325513adfb846f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

>#### rem 移动端适配
适配原理我就不多说了,不清楚请看我的另外一篇文章[用rem编写移动端自适应网页](https://www.jianshu.com/p/91ac1690be89)(https://www.jianshu.com/p/91ac1690be89),这里说一下在vue-cli3中是如何配置的
1. 安装 amfe-flexible 插件 ```npm i amfe-flexible --save-dev```
2. 在 main.js 中导入
![ipone6](https://upload-images.jianshu.io/upload_images/7177443-05c1792eb5cfab79.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
3. 此时你的应用的 html 会自动根据手机的尺寸设置了 font-size, 如图
![](https://upload-images.jianshu.io/upload_images/7177443-5ea467230b5426e0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![](https://upload-images.jianshu.io/upload_images/7177443-ee3e3fda5ec57b39.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
4. 配置 pxtorem 插件，能帮你自动把 rem 转成 px, 具体配置如下，在项目根目录下的 vue.config.js（没有则新建）
里进行配置，如图
![](https://upload-images.jianshu.io/upload_images/7177443-2b6e79201971d86d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)




