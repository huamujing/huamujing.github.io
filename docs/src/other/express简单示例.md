#### express简单示例

**初始化包管理**

```elm
npm init -y
```

**基于express开发**

```elm
npm install express
```

```elm
npm install nodemon -D
```

**配置快捷键**

<span style="backGround: #efe0b9">package.json</span>

```json
"scripts": {
  "start": "nodemon ./src/main.js"
}
```

<span style="backGround: #efe0b9">目录结构</span>

```elm
- src
  + app    		// 全局相关
  + controller  // 控制器
  + router      // 路由
  + service     // 数据库
  + utils       // 工具
  + main.js     // 入口
```

<span style="backGround: #efe0b9">main.js</span>

> express的[解决跨域方案](https://blog.csdn.net/lalala_dxf/article/details/125907891)

```javascript
const express = require('express');
const app = express();

app.listen(8002, () => {
    console.log(`服务器启动成功~`);
});

// 接口示例
app.use('/testApi', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
    
  const count = Math.random()
  if (count > 0.5) {
    res.send({
      result: count
    })
  } else {
    res.send({
      code: 500,
      msg: count
    });
  }
})
```



