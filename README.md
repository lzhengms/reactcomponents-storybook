
## 启动可以调试组件

1、启动 npm run storybook

## 生成文档静态站

1、 npm run build-storybook


## 自动生成changelog

1、 git add .

2、 git cz

3、 npm run changelog

4、 git push -u origin main
## gulp、babel进行编译构建

1、npm run build

## 如何使用组件库

import { Button } from 'react-components/lib/components/Button'

import 'react-components/lib/components/Button/index.css'

也可以引入less文件

import 'react-components/lib/components/Button/index.less'


## 按需加载

可以配置babel-plugin-import做引入

## 本地调试

 1、npm run storybook 

 2、 可以直接调试组件代码

## 想再项目中直接使用看效果

1、在当前的这个组件库目录下运行 npm link

2、在cra创建的项目，使用craco来做babel-plugin-import的babel配置的重写

3、在cra创建的项目下，使用 npm link react-components

4、在cra创建的项目下, 引入 import { Button } from 'react-components'

5、在cra创建的项目下，运行 npm start 即可按需加载对应的库了






