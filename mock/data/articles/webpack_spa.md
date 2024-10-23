用户使用 Webpack 开发服务器。如果你使用 Webpack 开发服务器，确保正确配置以支持 SPA 路由。你可以在 Webpack 配置中添加一个 `historyApiFallback` 选项。这会确保所有请求都重定向到 `index.html`，使 React Router 能够处理路由。

以下是一个示例配置：

```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
    // 其他配置...
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // 静态文件路径
        compress: true,
        port: 9000,
        historyApiFallback: true, // 支持 SPA 路由
    },
    // 其他配置...
};
```

在这个配置中，`historyApiFallback: true` 会将所有未匹配的请求重定向到 `index.html`，确保 React Router 可以正确处理路由。

完成这些配置后，重新启动 Webpack 开发服务器，然后尝试访问 `http://localhost:9000/#/login`。如果还是有问题，请检查浏览器的开发者工具中的网络请求和控制台输出，以获得更多调试信息。