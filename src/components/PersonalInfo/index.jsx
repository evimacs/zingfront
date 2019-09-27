import React, {Component} from 'react'
import {Typography, Tag, Col, Row} from 'antd'
import './index.scss'

const {Title, Paragraph} = Typography

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      workItems: {
        papaya: {
          title: ['木瓜移动科技有限公司', '后端开发工程师', '2017.10-2019.07'],
          details: [
            {title: '1.项目开发:负责公司CRM系统整体功能框架的设计与开发'},
            {title: '2.技术对接:负责公司与FB技术对接工作，保证客户业务能够正常进行'},
            {title: '3.业务设计:参与系统中的业务逻辑设计，对现有系统中的业务进行扩展与优化'},
            {title: '4.负责公司技术文档的编写及维护，和同事定期review团队的代码，与团队共同学习及成⻓'},
          ],
        },
        bluefocus: {
          title: ['蓝色光标集团', '初级开发工程师', '2016.06-2017.10'],
          details: [
            {title: '1.项目开发:负责 BlueMc 的后台计算功能开发以及部分数据接口开发'},
            {title: '2.数据对接:负责 AutoMc 的数据对接工作，负责 AutoMc 的数据接口开发'},
            {title: '3.基础运维:负责 BlueMc 的基础运维工作，包括 ElasticSearch、MySQL 等'},
            {title: '4.数据服务:根据相关团队的需求，对数据进行清洗计算整理等操作，提供符合需求的数据'},
            {title: '5.文档编写:负责将功能模块代码以及运维经验整理编写成文档，方便其他同事的使用'},
          ],
        },
        yingchuang: {
          title: ['北京英创信诚科技有限公司', '初级开发工程师', '2016.03-2016.05'],
          details: [
            {title: '1.项目开发:根据客户需求，利用 Oracle SQL 进行 ERP 系统相关模块的开发'},
            {title: '2.项目测试:编写测试文档，按照测试文档对自己编写的功能模块进行测试'},
          ],
        },
      },
      projects: {
        crm: {
          title: ['CRM', '设计开发', '2017.10-2019.07'],
          details: [
            {title: '项目简介:本项目是公司内部的CRM系统,主要实现了公司对广告主的管理、广告主Facebook广告账号的管理、广告主及渠道的财务结算等广告代理的相关业务。', tags: []},
            {title: '技术标签:', tags: ['Python', 'Flask', 'MySQL', 'SQLAlchemy']},
            {title: '项目技术: 1.使用flask进行网站后端开发，实现前后端数据的交互。', tags: []},
            {title: '2.使用MySQL数据库对公司业务数据进行存储与管理。', tags: []},
            {title: '3.使用多线程技术及Facebook API等技术进行相关业务数据抓取，为业务人员提供定制化的报告', tags: []},
          ],
        },
        automc: {
          title: ['AutoMC', '设计开发', '2017.08-2017.09'],
          details: [
            {title: '项目简介:本项目主要对汽⻋网站数据进行分析，为客户提供品牌在相关网站上的口碑、声量以及汽⻋用户对品牌的正负面评价等指标的数据分析。', tags: []},
            {
              title: '技术标签:',
              tags: ['Python', 'Flask', 'Nginx', 'Elasticsearch', 'Kafka'],
            },
            {title: '项目技术:1.使用 Flask 进行数据接收程序开发，包括数据接收、字段验证等', tags: []},
            {title: '2.使用 Nginx 进行负载均衡配置，从而使数据接收程序可以多进程多端口运行', tags: []},
            {title: '3.使用 Kafka 对接收的数据进行缓存处理，保证之后进行数据分析时有原始数据用', tags: []},
            {title: '4.使用 ElasticSearch 对文章内容进行全文检索，对文章阅读回复数进行筛选检索操作', tags: []},
          ],
        },
        bluemc: {
          title: ['BlueMC', '参与开发', '2016.09-2017.09'],
          details: [
            {title: '项目简介:本项目基于微信微博数据分析，为广告、公关行业营销人提供微信舆情分析、KOL用户画像、公众号监测等相关服务。', tags: []},
            {title: '技术标签:', tags: ['Java', 'Spring', 'Spark', 'Hbase', 'ElasticSearch', 'Mongo', 'MySQL']},
            {title: '项目技术:1. 使用 spring 为前端开发出相应的接口，供前端调用', tags: []},
            {title: '2.使用 MySQL 作为分析结果以及用户任务信息的存储工具', tags: []},
            {title: '3.使用 Kafka 对接收的数据进行缓存处理，保证之后进行数据分析时有原始数据用', tags: []},
            {title: '4.使用 ElasticSearch 为用户在前端的搜索返回符合用户搜索的公众号或文章', tags: []},
            {title: '5.使用 Spark+HBase 作为大数据计算的通用框架，为注册用户计算出符合需求的结果', tags: []},
          ],
        },
        automcSpider: {
          title: ['AuotMC爬虫', '设计开发', '2016.06-2016.09'],
          details: [
            {title: '项目简介:本项目主要是定时从汽⻋相关网站进行数据采集，对数据按照一定的处理规则进行数据清洗，并对数据进行入库处理等一系列操作'},
            {title: '技术标签:', tags: ['Python', 'requests', 'PyQuery', 'MySQL', 'redis', 'HBase', 'Postfix']},
            {title: '项目技术:1. 使用 HBase 对从格式化后打完标签的数据进行存储'},
            {title: '2.使用 MySQL+redis 来做爬虫任务管理器，实现分布式多进程爬虫'},
            {title: '3.使用 Postfix 搭建免费邮箱，每天定时发送当天的爬虫抓取数据的情况'},
            {title: '4.使用 requests+PyQuery 爬取汽⻋论坛的数据，并对返回的数据进行解析、格式化处理'},
          ],
        },
      },
    }
  }

  handleTags = (tags) => {
    return tags.map((item, key) => {
      return (<Tag key={key}>{item}</Tag>)
    })
  }

  handleWorks = (items) => {
    return (
      <div>
        <Paragraph>
          <Row>
            {items.title.map((item, key) => {
              return (<Col span={8} key={key}>{item}</Col>)
            })}
          </Row>
        </Paragraph>
        {
          items.details.map((item, key) => {
            if (item.tags) {
              return (<Paragraph key={key}>{item.title} {this.handleTags(item.tags)}</Paragraph>)
            }
            return (
              <Paragraph key={key}>{item.title}</Paragraph>)
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className={'personal_info'}>
        <Title>刘东升</Title>
        <Title level={2}>求职意向:Python后端开发</Title>
        <Title level={3} className={'education'}>本科·信息管理与信息系统·郑州大学</Title>
        <Title level={3}>男|25岁|北京|13121979762|evimacs.liu@qq.com</Title>
        <ul>

          <Title level={2}>综合自评</Title>
          <Paragraph>
            个人项目:http://evimacs.top
          </Paragraph>
          <Paragraph>
            个人简介:三年Web系统开发经验，作为主力工程师参与设计与开发了多个项目，负责系统核心模块的开发、测试以及 部署。熟悉HTTP网络协议
            ，熟悉Nginx，熟练使用MySQL、Redis等数据库，熟悉主流Web后端框架，了解React等前 端框架，能够独立进行前后端分离开发。有优秀的学习能力和团队沟通能力，经常与团队进行技术分享，与团队共同成⻓。
          </Paragraph>

          <Title level={2}>工作经历</Title>
          {this.handleWorks(this.state.workItems.papaya)}
          {this.handleWorks(this.state.workItems.bluefocus)}
          {this.handleWorks(this.state.workItems.yingchuang)}


          <Title level={2}>项目经历</Title>
          {this.handleWorks(this.state.projects.crm)}
          {this.handleWorks(this.state.projects.automc)}
          {this.handleWorks(this.state.projects.bluemc)}
          {this.handleWorks(this.state.projects.automcSpider)}
        </ul>
      </div>
    )
  }
}
