const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      "name": "@storybook/preset-create-react-app",
      "options": {
        "craOverrides": {
          "fileLoaderExcludes": ["less"]
        }
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push(
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      }
    );
    return config;
},
}