import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "后端文档",
  description: "A VitePress Site",
  srcDir: 'src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: '程序语言', link: '/程序语言/node.js/实践/实践' },
      { text: '数据库', link: '/数据库/表相关/表结构' },
      { text: '系统操作', link: '/系统操作/脚本/bash/文档笔记' },
      { text: '工具使用', link: '/工具使用/Postman/index' },
      { text: '娱乐', link: '/娱乐/1' },
    ],

    sidebar: {
      '/程序语言/': [
        {
          text: 'node.js',
          collapsed: true,
          items: [
            {
              text: '实践',
              items: [
                { text: '实践', link: '/程序语言/node.js/实践/实践' },
                { text: '本地oss上传', link: '/程序语言/node.js/实践/本地oss上传' },
              ]
            },
            {
              text: '框架',
              items: [
                {
                  text: 'express',
                  items: [
                    { text: '简单示例', link: '/程序语言/node.js/框架/express/简单示例' },
                  ]
                },
              ]
            },
            {
              text: '学习',
              items: [
                { text: '认识', link: '/程序语言/node.js/学习/认识' },
                { text: '认识模块', link: '/程序语言/node.js/学习/认识模块' },
                { text: 'express', link: '/程序语言/node.js/学习/express' },
                { text: '连接数据库', link: '/程序语言/node.js/学习/连接数据库' },
              ]
            },
            {
              text: '学习-co',
              items: [
                { text: 'co1-node基础', link: '/程序语言/node.js/学习-co/co1-node基础' },
                { text: 'co2-实现脚手架', link: '/程序语言/node.js/学习-co/co2-实现脚手架' },
                { text: 'co3-服务器', link: '/程序语言/node.js/学习-co/co3-服务器' },
                { text: 'co4-mysql', link: '/程序语言/node.js/学习-co/co4-mysql' },
                { text: 'co5-项目', link: '/程序语言/node.js/学习-co/co5-项目' },
                { text: 'co6-补充', link: '/程序语言/node.js/学习-co/co6-补充' },
              ]
            },
          ]
        },
        {
          text: 'Java技术栈',
          collapsed: true,
          items: [
            {
              text: 'Java',
              items: [
                { text: '其它', link: '/程序语言/Java技术栈/Java/其它' },
                {
                  text: '菜鸟',
                  items: [
                    { text: '基础-第一部分', link: '/程序语言/Java技术栈/Java/菜鸟/基础-第一部分' },
                    { text: '日期-第二部分', link: '/程序语言/Java技术栈/Java/菜鸟/日期-第二部分' },
                  ]
                },
                {
                  text: '狂神教程',
                  items: [
                    { 
                      text: 'JavaSE',
                      items: [
                        {  text: 'JavaSE-入门', link: '/程序语言/Java技术栈/Java/狂神教程/JavaSE/JavaSE-入门'},
                        {  text: 'JavaSE-流程控制', link: '/程序语言/Java技术栈/Java/狂神教程/JavaSE/JavaSE-流程控制'},
                        {  text: 'Java基础-注解', link: '/程序语言/Java技术栈/Java/狂神教程/JavaSE/Java基础-注解'},
                        {  text: 'Java基础-多线程', link: '/程序语言/Java技术栈/Java/狂神教程/JavaSE/Java基础-多线程'},
                      ]
                    },
                    { 
                      text: 'JavaWeb',
                      items: [
                        {  text: 'Web概念', link: '/程序语言/Java技术栈/Java/狂神教程/JavaWeb/Web概念'},
                        {  text: '项目', link: '/程序语言/Java技术栈/Java/狂神教程/JavaWeb/项目'},
                      ]
                    },
                    { 
                      text: 'SSM框架',
                      items: [
                        {  text: 'Spring', link: '/程序语言/Java技术栈/Java/狂神教程/SSM框架/Spring'},
                        {  text: 'SpringMVC', link: '/程序语言/Java技术栈/Java/狂神教程/SSM框架/SpringMVC'},
                        {  text: 'MyBatis', link: '/程序语言/Java技术栈/Java/狂神教程/SSM框架/MyBatis'},
                      ]
                    },
                    { 
                      text: '微服务开发',
                      items: [
                        {  text: 'SpringBoot', link: '/程序语言/Java技术栈/Java/狂神教程/微服务开发/SpringBoot'},
                        {  text: 'MybatisPlus', link: '/程序语言/Java技术栈/Java/狂神教程/微服务开发/MybatisPlus'},
                      ]
                    },
                  ]
                },
              ]
            },
          ]
        },
      ],
      '/系统操作/': [
        { 
          text: '脚本', 
          items: [
            { 
              text: 'bash', 
              items: [
                { text: '文档笔记', link: '/系统操作/脚本/bash/文档笔记' },
                { text: '补充知识', link: '/系统操作/脚本/bash/补充知识' },
                { text: '示例', link: '/系统操作/脚本/bash/示例' },
                { text: '实例', link: '/系统操作/脚本/bash/实例' },
              ]
            },
          ]
        },
        { text: 'Window', link: '/系统操作/Window/index' },
        { text: 'Linux', link: '/系统操作/Linux/index' },
      ],
      '/数据库/': [
        {
          text: '表相关',
          items: [
            { text: '表结构', link: '/数据库/表相关/表结构' },
            { text: '数据库设计常见表设计分析', link: '/数据库/表相关/数据库设计常见表设计分析' },
          ]
        },
        {
          text: 'MongoDB',
          items: [
            { text: '入门', link: '/数据库/MongoDB/入门' },
          ]
        },
        {
          text: 'MySQL',
          items: [
            { text: 'SQL语句', link: '/数据库/MySQL/SQL语句' },
            { text: '实际应用', link: '/数据库/MySQL/实际应用' },
            {
              text: '学习-黑', 
              items: [
                { text: '基础', link: '/数据库/MySQL/学习-黑/基础' },
                { text: '进阶', link: '/数据库/MySQL/学习-黑/进阶' },
              ]
            },
          ]
        },
      ],
      '/工具使用/': [
        {
          text: '工具使用',
          items: [
            { text: 'Postman', link: '/工具使用/Postman/index' },
          ]
        },
      ],
      '/娱乐/': [
        { text: '1', link: '/娱乐/1' },
        { text: '待处理', link: '/娱乐/待处理' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    outline: {
      level: 'deep',
      label: '页面导航'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
