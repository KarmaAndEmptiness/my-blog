要在使用 `webpack-merge` 合并配置时只保留一个相同的 `module.rules` 配置，可以通过自定义的合并策略来实现。具体来说，可以使用 `webpack-merge` 提供的合并函数和策略选项来控制合并的行为。

下面是一个示例，展示了如何通过自定义合并策略，只保留一个相同的 `module.rules` 配置：

```javascript
const { mergeWithRules } = require('webpack-merge');

// 自定义合并策略
const customMerge = mergeWithRules({
  module: {
    rules: {
      test: 'match', // 按照 test 字段匹配
      use: 'replace', // 如果 test 匹配，则替换 use 数组
    },
  },
});

// webpack.common.js
const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
};

// webpack.dev.js
const dev = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

// webpack.prod.js
const prod = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
};

// 选择环境配置
const envConfig = process.env.NODE_ENV === 'production' ? prod : dev;

// 合并配置
const finalConfig = customMerge(common, envConfig);

module.exports = finalConfig;
```

在这个示例中，我们使用 `mergeWithRules` 方法来创建一个自定义合并函数 `customMerge`。通过指定 `module.rules` 的 `test` 字段为匹配项，并将 `use` 字段设置为替换模式，确保当 `test` 匹配时，新的 `use` 数组会替换旧的。

这样，当合并 `common` 和 `envConfig` 配置时，如果 `test` 字段相同，只会保留一个配置，并且是后合并的配置（即开发或生产环境下的配置）。

你可以根据具体需求调整合并策略中的字段和规则，以适应不同的配置场景。