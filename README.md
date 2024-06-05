对于浏览器：

shell

# 编译为包含自执行函数（'iife'）的 <script>。

rollup main.js --file bundle.js --format iife
对于 Node.js:

shell

# 编译为一个 CommonJS 模块 ('cjs')

rollup main.js --file bundle.js --format cjs

rollup ./src/main.js --file ./output/bundle.js --format es

对于浏览器和 Node.js：

shell

# UMD 格式需要一个包名

rollup main.js --file bundle.js --format umd --name "myBundle"
