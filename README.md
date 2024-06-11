# 这是一款控制台花样输出工具

## 编制

👩‍💻 作者：Vinca

📫 邮件：237690966@qq.com

## 安装

```sh
npm install v_aot
```

## 引用

```javascript
import v_aot from "v_aot";
```

## 字段说明

| Color | Hex                                                |
| ----- | -------------------------------------------------- |
| 属性  | 字符串                                             |
| 值    | 字符串                                             |
| 类型  | default 、 primary 、 success 、 warning 、 danger |

## 调用

### v_aot.log（值）[文本输出]

```javascript
v_aot.log("😼 vinca wrote the nuxt3 project");

v_aot.log("【百度一下】https://www.baidu.com/");
```
### 图示
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/047e05a8a8014559a3b54144ca8af8f7.png)

### v_aot.txt（属性,值,类型）[文本输出]

```javascript
v_aot.txt("😼 vinca wrote the nuxt3 project", `v1.0.0 release`);

v_aot.txt("😼 vinca wrote the nuxt3 project", `v1.0.0 release`, `success`);
```
### 图示
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/a276b621a3e64275b65bdebca84d466a.png)

### v_aot.capsule（属性,值,类型）[文本输出]

```javascript
v_aot.capsule("😼 vinca wrote the nuxt3 project", `v1.0.0 release`);

v_aot.capsule("😼 vinca wrote the nuxt3 project", `v1.0.0 release`, `success`);
```
### 图示
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/2a8c8ef80a1a42da8a0e2b5537d8b099.png)

### v_aot.pa（值）[图片输出]

```javascript
await v_aot.pa("../public/R-C.jpg").then((res) => {
  console.log(`请求本地jpg图，异步加载结果：`, res, "\n\n");
});

await v_aot
  .pa(
    "https://img-baofun.zhhainiao.com/pcwallpaper_ugc/static/50706fe64cbbdddc2c8c99d27eb64d4d.jpeg?x-oss-process=image%2fresize%2cm_lfit%2cw_3840%2ch_2160"
  )
  .then((res) => {
    console.log(`请求网络jpeg图，异步加载结果：`, res, "\n\n");
  });

await v_aot
  .pa(
    "https://ts1.cn.mm.bing.net/th/id/R-C.fd7cad22933db9caf2e02f2201cdacdb?rik=gJgWP1TDqA29CA&riu=http%3a%2f%2fimg.zcool.cn%2fcommunity%2f0109d25949e3baa8012193a3fb7c19.gif&ehk=pPVPiyQNUuMbzYgHC7KUMw7JBiep%2bDQKO82vNsJfX0o%3d&risl=&pid=ImgRaw&r=0"
  )
  .then((res) => {
    console.log(`请求网络gif图，异步加载结果：`, res, "\n\n");
  });
```
### 图示
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/f894a3276411409699d0cbfef4f56fa8.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/8a4dad98e4854afbab2727c3e1d245e3.png)
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/7b33050bb54a4e87b16edb5a3bb1ca95.png)

### v_aot.table（对象）[表格输出]

```javascript
v_aot.table({
  header: ["版本号", "版本描述"],
  body: [
    ["1.0.0", "更新log方法，可以输入内容完成控制台输出打印"],
    ["1.0.1", "新增胶囊模式"],
    ["1.0.2", "新增图片打印输出"],
    ["1.0.5", "新增gif兼容打印输出"],
  ],
});
```
### 图示
![在这里插入图片描述](https://img-blog.csdnimg.cn/direct/e82c163265be4ba6a5ee6b706efa024d.png)
