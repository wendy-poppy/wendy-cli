/**
 * 服务器A
 */
const serviceA = {
  host: 'xxx.xxx.xxx',
  username: 'xxx',
  password: 'xxxx'
}

module.exports = {
  // 项目A，console测试环境
  'A-console-TEST': {
    service: serviceA,
    localPath: '/Users/wendy/Documents/mundhana/pinjamku-admin',
    remotePath: 'root/html/test'
  },
  // 项目A，console预发环境
  'A-console-PREEVN': {
    service: serviceA,
    localPath: '/',
    remotePath: 'root/html/preevn'
  },
  // 项目A，console正式环境
  'A-console-PROD': {
    service: serviceA,
    localPath: '/',
    remotePath: 'root/html/prod'
  },
}