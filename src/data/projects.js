const projects = [
  {
    name: '公司项目经验',
    children: [
      {
        name: 'U味儿新版CRM管理和接单系统（isomopic）',
        desc: '使用webpack作为打包工具，前端技术栈使用react + react-router + antd等框架及库，采用前后端同构的形式满足搜索引擎内容抓取。为保证代码整洁和规范其他前端开发人员的代码习惯使用eslint Airbnb标准进行代码编写。项目结构方面，分为数据模型（model）、页面级组件（page）、公用组件（component）和工具（utility）等。（樊涛）代码托管平台：coding.net'
      },
      {
        name: 'U果新CRM和接单系统中端 - api（内部名称：三元桥）',
        desc: '核心技术使用ThinkPHP5.x框架，使用运行环境为apache2、php5.4以上环境。用于对接微信小程序。代码托管平台：coding.net'
      },
      {
        name: 'U果Lite - 微信小程序（内部名称：小苹果）',
        desc: 'U果CRM阉割版，主要功能是给使用者查看CRM提供的mapreduce数据，和进行简单的管理。使用WeUI、微信开发者工具进行代码编写。我主要做了框架搭建、接口代理两大块。代码托管平台：coding.net'
      },
      {
        name: '对标360 duibiao360.com（代号：Gemini）',
        desc: '供职于对标科技时，在CTO的带头下进行了原始产品的改版。我们将UI库从Material-UI切换到and.design，同时将语法升级到ES6。并且使用了百度的echarts图表插件进行了数据可视化。该项目使用react-transmit从服务端获取数据，并在前后端同时渲染，使得搜索引擎在抓去代码时候可以获取到服务端传来的数据。代码托管平台：coding.net'
      },
      {
        name: '海外帮 hwbang.com ',
        desc: '【苏州易达捷进出口贸易有限公司 ／ 苏州亿极云商科技有限公司深圳分公司开发部】代码托管平台：GoGIT'
      }
    ]
  },
  {
    name: '个人项目经验',
    children: [
      {
        name: '公交报站器（pc-web）管理端',
        desc: '使用vue-cli脚手架构建项目，配合webpack作为打包工具、vue-router的hash模式（可转history模式）、element UI作为样式库。eslint Airbnb作为代码格式规范标准。代码托管平台：github'
      }
    ]
  },
  {
    name: '即将上线',
    children: [
      {
        name: 'TOS - 教师学生约课系统（SaaS）',
        desc: '此系统将满足中小琴行、街舞教室、一对一培训机构和小型驾校等教师学生上课时间约定的软需求。管理端使用PCWeb，客户端使用微信小程序上线。'
      },
      {
        name: '租个车HiCar - 小型租车系统',
        desc: '此系统将满足二三线城市租车公司以及中小型租赁行业公司的公共关系和客户管理需求。管理端使用PCWeb，客户端将在iOS、安卓和微信小程序三个平台上线。'
      },
      {
        name: '',
        desc: ''
      },
      {
        name: '',
        desc: ''
      },
      {
        name: '',
        desc: ''
      }
    ]
  }
]

module.exports = projects
