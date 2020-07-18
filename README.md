### 简答题

1. Webpack构建流程
   1. 分析提取项目需求、
   2. 提出公共打包、开发、生产配置需求
   3. 编辑webpack 配置文件
      1. 项目目录导出构建、HTML文件生成
      2. 配置不同模块的加载loader
      3. 配置提高开发效率选项：dev-server、HMR、SrouceMap、ESlint
      4. 配置打包优化：Tree Saking、代码分割、动态导入
   4. 配置 Git Hooks

2. Loader 是处理不同模块加载，因为webpack 只对js模块进行处理

   Plugin 扩展增强webpack 构建功能

   **loader 开发思路**：创建一个js 模块，并导出一个函数A，函数A参数为webpack 处理不同模块资源的源码soucre，loader 就是 处理source，并返回一个新的soure 给webpack 使用，相当于loader 提供一个模块转换器，增强webpakc 对不同资源的处理

   **Plugin 开发思路**：plugin 是一个js class类，有一个apply 方法。这个apply 方法会在wepack 整个编译声明周期内调用。 apply 会接受一个 compiler 参数，是webpack 编译时的执行上线文，有了这个compiler，就可以在webpack 的不同编译阶段处理各种操作。

### 编程题

1. 分析项目:

   **公用的webpack 配置有** :

   处理.vue 文件 vue-loader，html 文件生成webpack-html-loader

   之后用css-loader、file-loader、url-loader、eslint-loader、babel-loader、less-loader  处理各种资源文件

   **开发webpack 配置有**：

   webpack-dev-server、soucre-map、HMR、

   **打包webpack 配置有**：

   Tree shaking、clean-wabpack-plugin、分包

