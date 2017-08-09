export default {
  echartsOpts: [
        {
            title: {
              text: '线下订单成交量'
            },
            legend: {
                top: 40,
                left: '3%',
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
            series: [
                {
                    name: '自然订单',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '微信粉丝',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '微信活跃粉丝',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '微信广告',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '线上其他广告',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ],
            color: ['#0cc2a9', '#17f9a8', '#34d4e3', '#7b5eea', '#00f0ff']
        },
        {
            title: {
              text: '线上订单成交量'
            },
            legend: {
                top: 40,
                left: '3%',
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
                text: '线下订单受线上活动影响'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                top: 40,
                left: '3%',
                data:['受线上活动影响比例']
            },
            grid: {
                top: '80',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ],
            series : [
                {
                    name:'受线上活动影响比例',
                    type:'line',
                    stack: '总量',
                    smooth:true,
                    areaStyle: {normal: {
                        opacity: .1
                    }},
                    data:[12, 13, 10, 13, 9, 23, 21]
                }
            ],
            color: ['#1cc6af']
        },
        {
            title: {
                text: '线上订单受线下活动影响'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                top: 40,
                left: '3%',
                data:['受线下活动影响比例']
            },
            grid: {
                top: '80',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel: {
                        formatter: '{value}%'
                    }
                }
            ],
            series : [
                {
                    name:'受线下活动影响比例',
                    type:'line',
                    stack: '总量',
                    smooth:true,
                    areaStyle: {normal: {
                        opacity: .1
                    }},
                    data:[30, 53, 20, 18, 39, 43, 21]
                }
            ],
            color: ['#1cc6af']
        },
        {
            title: {
                text: '高效率店铺'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 40,
                data: ['销售金额']
            },
            grid: {
                top: '80',
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
                type: 'category',
                data: ['杭州大厦A','北京SKP','北京汉光','北京太古里','长沙王府进','广州正佳专卖店', '杭州银泰', '南京大洋', '上海久光']
            },
            series: [
                {
                    name: '销售金额',
                    type: 'bar',
                    data: [101238, 201231, 403212, 530230, 571744, 604970, 729034, 823489, 918203]
                }
            ],
            color: ['#34d4e3']
        }
    ]
}
