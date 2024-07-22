对于Vue.js这样的单页面应用，特别是使用HTML5 History API时，所有的路径都需要重定向到`index.html`，以便由前端路由器处理。

你可以修改你的Nginx配置中的`location /blog`块来正确处理这些情况：

```nginx
server {
    listen       80 default_server;
    listen       [::]:80 default_server;
    server_name  _;

    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;

    location =/ {
        return 301 http://holaworld.ggff.net/blog$request_uri;    
    }
    
    location /blog {
        alias /home/dist/;
        try_files $uri $uri/ /blog/index.html;
    }

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }
}
```

在这个配置中，`try_files`指令尝试查找请求的文件或目录，如果找不到，则重定向到`/blog/index.html`，这对于单页面应用来说是必须的，因为所有的路径都应该由前端路由器处理。

你还可以验证以下内容：

1. 确保你的`/home/dist/`目录中确实包含`index.html`文件。
2. 确保你的Vue应用中的`vue-router`的`base`选项配置为`/blog`。

### Vue Router 配置示例

在`router/index.js`或`main.js`中配置`vue-router`：

```javascript
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import About from '@/components/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/blog',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
});
```

确保`mode`设置为`history`，并且`base`设置为`/blog`。

这样一来，你的Nginx配置和Vue应用的配置就可以正确协同工作了，直接访问`http://holaworld.ggff.net/blog/about`应该可以正常显示你的单页面应用中的内容。