const workExperience = require('./workExperience')
const professionalSkills = require('./professionalSkills')
const practice = require('./practice')
const projects = require('./projects')
const resume = {
  info: {
    name: '田玉可',
    job: [
      '前端开发工程师/前端 Leader',
      '偏技术管理或运维方向'
    ],
    address: '北京 · 海淀 · 中关村',
    birth: '1990.07',
    gender: '男',
    school: [
      '北京师范大学珠海分校',
      '信息技术学院',
      '数字媒体技术 · 工学学士'
    ],
    experiences: [
      '2 年校内项目组开发经验',
      '6 年前端开发工作经验',
      '1 年管理 + 运维 + 全栈工作经验'
    ]
  },
  workExperience,
  professionalSkills,
  practice,
  projects
}

module.exports = resume
