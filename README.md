# wendy-cli
前端自动化部署

## 技术栈
chalk 美化命令行，进行着色等
commander 解析用户命令行输入
inquirer 命令行交互功能，像用户提问等
node-ssh ssh模块
ora 命令行环境的loading效果
shelljs 重新包装了 child_process 子进程模块，调用系统命令更方便

## 查看效果
```
node app start
```
### 或者 以全局的方式运行
1.配置 package.json 中的 bin 字段
```
  "bin": {
    "wendy": "./app.js"
  }
```
2.首先注册全局(本地安装创建的包))
```
  npm link
  or Mac
  sudo npm link
```
3.声明可执行应用
  在入口文件的最上方加入声明，声明这是一个可执行的应用
```
  #! /usr/bin/env node
```
4.执行命令
```
  wendy start
```
