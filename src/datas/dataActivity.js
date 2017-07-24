export default {
    echartsOpts: [{
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
            data:['邮件','短信']
        },
        grid: {
            top: '40',
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
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'短信',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[220, 182, 191, 234, 290, 330, 310]
            }
        ],
        color: ['rgb(110, 101, 159)', 'rgb(113, 209, 196)']
    }, {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['邮件', '短信'],
            left: 0
        },
        grid: {
            top: '40',
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
            data: ['发送次数']
        },
        series: [
            {
                name: '邮件',
                type: 'bar',
                data: [9]
            },
            {
                name: '短信',
                type: 'bar',
                data: [15]
            }
        ],
        color: ['rgb(110, 101, 159)', 'rgb(113, 209, 196)']
    }, {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            data: ['参与人数','活跃人数'],
            formatter: '{name}:{value}',
            top: '30%',
            right: 0,
            orient: 'vertical'
        },
        calculable: true,
        series: [
            {
                name:'活跃转化漏斗',
                type:'funnel',
                left: '10%',
                top: 60,
                bottom: 60,
                width: '60%',
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    },
                    emphasis: {
                        textStyle: {
                            fontSize: 20
                        }
                    }
                },
                labelLine: {
                    normal: {
                        length: 10,
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: '#fff',
                        borderWidth: 1
                    }
                },
                data: [
                    {value: 50, name: '活跃人数'},
                    {value: 100, name: '参与人数'}
                ]
            }
        ],
        color: ['rgb(70, 161, 143)', 'rgb(113, 209, 196)']
    }, {
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
            data:['邮件','短信']
        },
        grid: {
            top: '40',
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
                type : 'value'
            }
        ],
        series : [
            {
                name:'邮件',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[20, 132, 211, 34, 90, 20, 210]
            },
            {
                name:'短信',
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data:[22, 82, 91, 234, 29, 33, 31]
            }
        ],
        color: ['rgb(110, 101, 159)', 'rgb(113, 209, 196)']
    }, {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: "{a} {c}%"
        },
        legend: {
            data: ['邮件', '短信'],
            left: 0
        },
        grid: {
            top: '40',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                formatter: '{value} %'
            }
        },
        yAxis: {
            type: 'category',
            data: ['渠道到达率']
        },
        series: [
            {
                name: '邮件',
                type: 'bar',
                data: [60]
            },
            {
                name: '短信',
                type: 'bar',
                data: [85]
            }
        ],
        color: ['rgb(110, 101, 159)', 'rgb(113, 209, 196)']
    }, {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['邮件', '短信'],
            left: 0
        },
        grid: {
            top: '40',
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
            data: ['渠道退订数']
        },
        series: [
            {
                name: '邮件',
                type: 'bar',
                data: [79]
            },
            {
                name: '短信',
                type: 'bar',
                data: [121]
            }
        ],
        color: ['rgb(110, 101, 159)', 'rgb(113, 209, 196)']
    }],
    tableData: [{
        name: 'New Gam 2016-07-01',
        time: '2016-07-01 11:24:32',
        ways: '邮件',
        sendnum: 9000,
        activenum: 9000,
        num: '10000封',
        deliveryrate: '100%',
    }, {
        name: 'New Gam 2016-07-01',
        time: '2016-07-01 11:24:32',
        ways: '邮件',
        sendnum: 8000,
        activenum: 6700,
        num: '10000封',
        deliveryrate: '91%',
    }, {
        name: 'New Gam 2016-07-01',
        time: '2016-06-13 11:20:32',
        ways: '邮件',
        sendnum: 8000,
        activenum: 7000,
        num: '10000封',
        deliveryrate: '87.5%',
    }, {
        name: 'New Gam 2016-07-01',
        time: '2016-06-01 11:24:32',
        ways: '邮件',
        sendnum: 10000,
        activenum: 10000,
        num: '10000封',
        deliveryrate: '100%',
    }, {
        name: 'New Gam 2016-07-01',
        time: '2016-05-01 11:24:32',
        ways: '邮件',
        sendnum: 10000,
        activenum: 10000,
        num: '10000封',
        deliveryrate: '100%',
    }]
}
