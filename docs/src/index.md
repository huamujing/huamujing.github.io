---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Spring Loach"
  text: "后端文档"
  tagline: 醉里挑灯看剑，梦回吹角连营
  actions:
    - theme: brand
      text: SQL语句
      link: /数据库/MySQL/SQL语句
    - theme: alt
      text: 前端技术
      link: https://springloach.github.io/

features:
  - title: 编程语言
    details: node.js、java两种语言及相关框架
  - title: 数据库
    details: 表结构、MongoDB、MySQL
  - title: 系统操作
    details: bash脚本语法及例子、系统相关知识
---



<br />
<br />
<br />

#### markdown表格转化js对象
```javascript
const markdownTable = `
| name | job  | sex  |
| ---- | ---- | ---- |
| ab   | cd   | ef   |
| gh   | ij   | kl   |
`;

// Split the markdown content by lines
const lines = markdownTable.trim().split('\n');

// Extract the headers
const headers = lines[0].split('|').map(header => header.trim()).filter(header => header);

// Extract the rows
const rows = lines.slice(2).map(line => line.split('|').map(cell => cell.trim()).filter(cell => cell));

// Convert to array of objects
const result = rows.map(row => {
  let obj = {};
  headers.forEach((header, index) => {
    obj[header] = row[index];
  });
  return obj;
});

console.log(result);  // 对象数组
```




