import Mock from 'mockjs'

let List = []
export default {
  getStatisticalData: () => {
    //Mock.Random.float产生随机数100到8000之间，保留小数，最小0位，最大0位
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
        })
      )
    }
    return {
      code: 20000,
      data: {
        //饼图
        videoData: [
          {
            name:'小米',
            value:2999
          },
          {
            name:'苹果',
            value:3999
          },
          {
            name:'vivo',
            value:1999
          },
          {
            name:'oppo',
            value:1500
          },
          {
            name:'魅族',
            value:2999
          }
        ],
        //柱状图
        userData: [
          {
            date:'周一',
            new:5,
            active:200
          },
          {
            date:'周二',
            new:10,
            active:200
          },
          {
            date:'周三',
            new:15,
            active:500
          },
          {
            date:'周四',
            new:12,
            active:400
          },
          {
            date:'周五',
            new:4,
            active:80
          }
        ],
        //折线图
        orderData: {
          date:['20240301','20240302','20240303','20240304','20240305','20240306','20240307'],
          data:List
        },
        tableData: [
          {
            name: 'oppo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: 'vivo',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '苹果',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '小米',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '三星',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          },
          {
            name: '魅族',
            todayBuy: 100,
            monthBuy: 300,
            totalBuy: 800
          }
        ]
      }
    }
  }
}