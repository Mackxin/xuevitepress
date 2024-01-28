

# 记录配置到Github Pages 的过程

## 这里认真看，理解清楚

新建一个名为`xuevitepress`的文件夹，也就是我们文档的根目录

这里我是没有建立`docs`文件夹的哦，下面有些复制到官网的配置是需要改的哦

还有我这里的分支名是  `main` ，下面有些是要注意的，我会提示

```
.
├─ xuevitepress
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
```

## 安装的命令和默认设置

```
npm add -D vitepress
npx vitepress init
```

```
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./
│
◇  Site title:
│  bao
│
◇  Site description:
│  xiaobao
│
◇  Theme:
│  Default Theme + Customization
│
◇  Use TypeScript for config and theme files?
│  No
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
└  Done! Now run npm run docs:dev and start writing.

Tips:
- Since you've chosen to customize the theme, you should also explicitly install vue as a dev dependency.
```

## 本地项目目录新建文件 .gitignore

然后把下面的内容复制进去，保存好

```
node_modules
.DS_Store
dist
dist-ssr
cache
.cache
.temp
*.local
```

## 把本地代码传到github上

这里我在github上新建了一个仓库，名字为：`xuevitepress`

```js
电脑上安装好Git
然后在本地仓库依次执行下面的命令
git init  
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Mackxin/xuevitepress.git
git push -u origin main
```

## 开启GitHub action

在仓库`xuevitepress`的设置里，找到pages，进去后找到source点击开启 github action

## 创建deploy.yml文件

在根目录下新建文件夹`.github`

进入`.github`后，新建一个文件夹，名字为`workflows`

最后在文件夹`workflows`下新建文件 `.deploy.yml`

## 在文件 .deploy.yml 中添加下面的内容

```yml
# 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程
#
name: Deploy VitePress site to Pages

on:
  # 在针对 `main` 分支的推送上运行。如果你
  # 使用 `master` 分支作为默认分支，请将其更改为 `master`
  push:
    branches: [main]

  # 允许你从 Actions 选项卡手动运行此工作流程
  workflow_dispatch:

# 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列
# 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  # 构建工作
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # 如果未启用 lastUpdated，则不需要
      # - uses: pnpm/action-setup@v2 # 如果使用 pnpm，请取消注释
      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm # 或 pnpm / yarn
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
        run: npm ci # 或 pnpm install / yarn install / bun install
      - name: Build with VitePress
        run: |
          npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build
          touch .vitepress/dist/.nojekyll      
        # 上面这里我把官网默认的docs/给删掉了
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: .vitepress/dist
        # 上面这里我把官网默认的docs/给删掉了

  # 部署工作
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## 如果可以访问了，但是css样式没有加载进来

我们找到 `.vitepress` 下的  `config.mjs`

因为的仓库名是 `xuevitepress` 

记得在base属性里的仓库名改为自己的仓库名

这里需要注意一下：仓库名的左右两边记得加`/`，不然会出问题的哦

```js
export default defineConfig({
  base: '/blogxuevitepresshub/',  //加上这行代码
  title: "My Awesome Project"
})
```

## 至此，搭建完成