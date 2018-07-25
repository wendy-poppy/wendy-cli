/**
 * 自动化模块  -  选项配置文件
 */
module.exports = {
  // 项目名称
  name: [
    {
      type: 'list',
      name: 'name',
      message: '请选择要发布的项目',
      choices: [
        {
          name: '项目A',
          value: 'A'
        },
        {
          name: '项目B',
          value: 'B'
        },
        {
          name: '项目C',
          value: 'C'
        }
      ]
    }
  ],
  // 项目渠道
  source: {
    'A': [
      {
        type: 'list',
        name: 'source',
        message: '请选择要发布的渠道',
        choices: [
          {
            name: 'APP',
            value: 'APP'
          },
          {
            name: 'console',
            value: 'console'
          },
          {
            name: 'lender',
            value: 'lender'
          }
        ]
      }
    ],
    'B': [
      {
        type: 'list',
        name: 'source',
        message: '请选择要发布的渠道',
        choices: [
          {
            name: 'APP',
            value: 'APP'
          },
          {
            name: 'console',
            value: 'console'
          },
          {
            name: 'lender',
            value: 'lender'
          }
        ]
      }
    ],
    'C': [
      {
        type: 'list',
        name: 'source',
        message: '请选择要发布的渠道',
        choices: [
          {
            name: 'PC',
            value: 'PC'
          },
          {
            name: 'console',
            value: 'console'
          }
        ]
      }
    ]
  },
  // 项目环境
  type: [
    {
      type: 'list',
      name: 'type',
      message: '请选择发布环境',
      choices: [
        {
          name: '测试环境',
          value: 'TEST'
        },
        {
          name: '预发环境',
          value: 'PREENV'
        },
        {
          name: '正式环境',
          value: 'PROD'
        }
      ]
    }
  ]
}