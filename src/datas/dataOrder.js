export default {
    echartsOpts: [
        {
            title: {
                left: '3%',
                right: '4%',
                text: '线上订单成交量'
            },
            legend: {
                top: 40,
                left: '3%',
                right: '4%',
                data: ['自然订单', '线下体验', '线下接触', '线上广告', '粉丝介绍']
            },
            grid:{
                top: '80',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
                name: '自然订单',
                type: 'line',
                stack: '总量',
                data: [120, 132, 101, 13, 90, 230, 210]
              },
              {
                name: '线下体验',
                type: 'line',
                stack: '总量',
                data: [220, 182, 19, 234, 290, 330, 310]
              },
              {
                name: '线下接触',
                type: 'line',
                stack: '总量',
                data: [150, 23, 201, 154, 190, 330, 410]
              },
              {
                name: '线上广告',
                type: 'line',
                stack: '总量',
                data: [320, 332, 301, 33, 390, 330, 320]
              },
              {
                name: '粉丝介绍',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 13, 1320]
              }
          ],
          color: ['#0cc2a9', '#17f9a8', '#34d4e3', '#7b5eea', '#00f0ff']
        },
        {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 20,
                left: '3%',
                right: '4%',
                data: ['线上订单量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                //type: 'category',
                data: ['0:00','3:00','6:00','9:00','12:00','15:00', '18:00', '21:00']
            },
            series: [
                {
                    name: '线上订单量',
                    type: 'bar',
                    data: [10, 4, 3, 15, 30, 65, 10, 23]
                }
            ],
            color: ['#a070ec']
        },
        {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 20,
                left: '3%',
                right: '4%',
                data: ['线上订单量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '线上订单量',
                    type: 'bar',
                    data: [700, 400, 300, 1500, 3000, 2065, 1710]
                }
            ],
            color: ['#34d4e3']
        },
        {
            title: {
                left: '3%',
                right: '4%',
                text: '线下订单成交量'
            },
            legend: {
                top: 40,
                left: '3%',
                right: '4%',
                data: ['自然订单', '微信粉丝', '微信活跃粉丝', '微信广告', '线上其他广告']
            },
            grid:{
                top: '80',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
                name: '自然订单',
                type: 'line',
                stack: '总量',
                data: [20, 132, 101, 134, 90, 20, 210]
            },
            {
                name: '微信粉丝',
                type: 'line',
                stack: '总量',
                data: [220, 182, 191, 24, 290, 330, 310]
            },
            {
                name: '微信活跃粉丝',
                type: 'line',
                stack: '总量',
                data: [50, 22, 201, 154, 190, 330, 410]
            },
            {
                name: '微信广告',
                type: 'line',
                stack: '总量',
                data: [20, 332, 301, 334, 39, 330, 320]
            },
            {
                name: '线上其他广告',
                type: 'line',
                stack: '总量',
                data: [820, 932, 901, 934, 1290, 1330, 120]
            }
            ],
            color: ['#0cc2a9', '#17f9a8', '#34d4e3', '#7b5eea', '#00f0ff']
        },
        {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 20,
                left: '3%',
                right: '4%',
                data: ['线下订单量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                //type: 'category',
                data: ['0:00','3:00','6:00','9:00','12:00','15:00', '18:00', '21:00']
            },
            series: [
                {
                    name: '线下订单量',
                    type: 'bar',
                    data: [10, 4, 3, 15, 30, 65, 10, 23]
                }
            ],
            color: ['#a070ec']
        },
        {
            title: {
                show: false
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 20,
                left: '3%',
                right: '4%',
                data: ['线下订单量']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data : ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '线下订单量',
                    type: 'bar',
                    data: [700, 400, 300, 1500, 3000, 2065, 1710]
                }
            ],
            color: ['#34d4e3']
        },
        {
            title : {
                top: '10',
                left: '3%',
                text: '热销商品分析',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                top: '40',
                left: '3%',
                right: '4%',
                data: ['玫珂菲烟熏紫睫毛膏','玫珂菲眼妆固定液','玫珂菲眼部持久防晕底霜','玫珂菲双用水粉霜02号','玫珂菲双用水粉霜06号', '玫珂菲双用水粉霜08号', '其他'],
                formatter(name) {
                    return name.length > 5? name.substr(0, 5) + '……' : name
                }
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : ['35%', '50%'],
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'玫珂菲烟熏紫睫毛膏'},
                        {value:310, name:'玫珂菲眼妆固定液'},
                        {value:234, name:'玫珂菲眼部持久防晕底霜'},
                        {value:135, name:'玫珂菲双用水粉霜02号'},
                        {value:1548, name:'玫珂菲双用水粉霜06号'},
                        {value:848, name:'玫珂菲双用水粉霜08号'},
                        {value:548, name:'其他'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ],
            color: ['#49fbbe', '#0cc2a9', '#7b5eea', '#ffa87d', '#34d4e3', '#3a80ff', '#767676']
        },
        {
            title : {
                top: '10',
                left: '3%',
                text: '线上销售渠道占比情况',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                top: '40',
                left: '3%',
                right: '4%',
                data: ['京东旗舰店','天猫旗舰店','苏宁','唯品会','丝芙兰', '其他']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : ['35%', '50%'],
                    center: ['50%', '60%'],
                    data:[
                        {value:35, name:'京东旗舰店'},
                        {value:30, name:'天猫旗舰店'},
                        {value:34, name:'苏宁'},
                        {value:135, name:'唯品会'},
                        {value:138, name:'丝芙兰'},
                        {value:58, name:'其他'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ],
            color: ['#49fbbe', '#0cc2a9', '#7b5eea', '#ffa87d', '#34d4e3', '#3a80ff', '#767676']
        },
        {
            title : {
                top: '10',
                left: '3%',
                text: '下单终端占比',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                top: '40',
                left: '3%',
                right: '4%',
                data: ['手机APP','微信','桌面端网站','手机网站','其他']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : ['35%', '50%'],
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'手机APP'},
                        {value:30, name:'微信'},
                        {value:234, name:'桌面端网站'},
                        {value:15, name:'手机网站'},
                        {value:148, name:'其他'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ],
            color: ['#49fbbe', '#0cc2a9', '#7b5eea', '#ffa87d', '#767676']
        },
    ]
}
