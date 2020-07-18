# 知识体系

#### 封装 axios

1. 使用拦截器统一处理请求和响应数据
2. 挂载到原型上

#### 上拉加载更多

1. vant 的组件
2. 设置初始高度，不然 bug 很严重

#### 懒加载

1. 懒加载是什么
2. 如何实现

#### 环境配置

1. 根目录新建 .env.development （测试环境） 文件

   ```
   VUE_APP_URL="http://132.232.87.95:3000/api"
   ```

   然后新建。env.production（生产环境）文件

   ```
   VUE_APP_URL="http://132.232.94.151:3000/api"
   ```

2. 配置 package.json

   ```
    "scripts": {
       "serve": "vue-cli-service serve --model",
       "build": "vue-cli-service build --model",
       "lint": "vue-cli-service lint"
     },
   ```

3. 项目中通过 process.env.VUE_APP_URL  访问 VUE_APP_URL 的值，不同的环境取到的值不一样

#### 打包部署

#### 移动端适配

1. amfe-flexib 设置 root 元素字体大小
2. pxtorem  px 转 rem
