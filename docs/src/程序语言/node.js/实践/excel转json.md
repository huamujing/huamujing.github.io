

### 解析excel生成json文件

1. 安装 `xlsx` 包

   ```elm
   npm install xlsx
   ```

2. 创建 `index.js`

   ```javascript
   const XLSX = require('xlsx');
   const fs = require('fs');
   
   // 读取 Excel 文件
   const workbook = XLSX.readFile('demo.xlsx');
   
   // 获取第一个工作表
   const sheetName = workbook.SheetNames[0];
   const worksheet = workbook.Sheets[sheetName];
   
   // 将工作表转换为 JS 对象
   const data = XLSX.utils.sheet_to_json(worksheet);
   
   // 打印结果
   console.log(data);
   
   // 保存 JS 对象为 JSON 文件
   fs.writeFileSync('output.json', JSON.stringify(data, null, 2));
   ```

3. 执行文件代码

   ```elm
   node index.js
   ```



#### 自定义键名

`index.js`

```javascript
const XLSX = require('xlsx');
const fs = require('fs');

// 读取 Excel 文件
const workbook = XLSX.readFile('yy.xlsx');

// 获取第一个工作表
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 自定义列名
const customHeaders = ['name', 'phone', 'book']; // 替换为你希望的标题

// 使用自定义标题转换为 JS 对象
const data = XLSX.utils.sheet_to_json(worksheet, {
    header: customHeaders,   // 这里传入自定义的标题
    range: 1, // 从 Excel 的第二行开始读取数据（跳过原来的第一行标题）
});

// 打印结果
console.log(data);

// 保存 JS 对象为 JSON 文件
fs.writeFileSync('output.json', JSON.stringify(data, null, 2));
```



#### 根据标题行映射键名

`index.js`

```javascript
const XLSX = require('xlsx');
const fs = require('fs');

// 读取 Excel 文件
const workbook = XLSX.readFile('yy.xlsx');

// 获取第一个工作表
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 读取 Excel 第一行作为原始标题
const originalHeaders = XLSX.utils.sheet_to_json(worksheet, { header: 1 })[0];

// 定义自定义的键名映射，格式为 { 原始标题: 自定义标题 }
const headerMapping = {
  '姓名': 'name',
  '年龄': 'age',
  '地址': 'address'
  // 根据你的 Excel 文件中的实际标题进行映射
};

// 使用自定义标题转换为 JS 对象
const data = XLSX.utils.sheet_to_json(worksheet, {
    header: originalHeaders.map(header => headerMapping[header] || header), // 使用映射，找不到的保持原名
    range: 1, // 从第二行开始读取数据
});

// 打印结果
console.log(data);

// 保存 JS 对象为 JSON 文件
fs.writeFileSync('output.json', JSON.stringify(data, null, 2));
```



