export default {
    echartsOpts: [{
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data:['粉丝转化率','会员转化率']
        },
        xAxis: [
            {
                type: 'category',
                data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '粉丝转化率',
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                    formatter: '{value} %'
                }
            },
            {
                type: 'value',
                name: '会员转化率',
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name:'粉丝转化率',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 13.6]
            },
            {
                name:'会员转化率',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3]
            }
        ],
        color: ['rgb(95, 166, 73)', 'rgb(101, 166, 244)']
    }, {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['非会员', '会员', '粉丝数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07']
        },
        series: [
            {
                name: '非会员',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '会员',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '粉丝数',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ],
        color: ['rgb(72, 139, 214)', 'rgb(93, 165, 72)', 'rgb(219, 192, 74)']
    }, {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['高影响力会员增长情况']
        },
        grid: {
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
            type: 'value',
            axisLabel: {
                formatter: '{value} %'
            }
        },
        series: [
            {
                name:'高影响力会员增长情况',
                type:'line',
                stack: '总量',
                data:[12, 13.2, 10.1, 13.4, 9, 23, 21]
            }
        ],
        color: ['rgb(125, 139, 133)']
    }, {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['会员直接带来订单数', '受会员影响的订单数']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07']
        },
        series: [
            {
                name: '会员直接带来订单数',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '受会员影响的订单数',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }
        ],
        color: ['rgb(72, 139, 214)', 'rgb(93, 165, 72)']
    }, {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['会员影响力指数']
        },
        grid: {
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
            type: 'value',
            axisLabel: {
                formatter: '{value} %'
            }
        },
        series: [
            {
                name:'会员影响力指数',
                type:'line',
                stack: '总量',
                data:[19.2, 31.2, 12.1, 32.4, 29, 23, 12.1]
            }
        ],
        color: ['rgb(102, 167, 246)']
    }]
}
