export default {
    tableData1: [
        {
            phone: '13987653456',
            name: '李女士',
            time: 23
        },
        {
            phone: '18678326401',
            name: '张常义',
            time: 21
        },
        {
            phone: '13185730231',
            name: '赵晓华',
            time: 20
        },
        {
            phone: '13762319555',
            name: '刘文熙',
            time: 22
        },
        {
            phone: '17899663321',
            name: '李冰',
            time: 20
        }
    ],
    tableData2: [
        {
            phone: '13987653456',
            weixinname: 'samray',
            time: 35
        },
        {
            phone: '18678326401',
            weixinname: 'banksiae ',
            time: 28
        },
        {
            phone: '13185730231',
            weixinname: '承尘',
            time: 23
        },
        {
            phone: '13762319555',
            weixinname: '特立独行的猪',
            time: 23
        },
        {
            phone: '17899663321',
            weixinname: '云匠和花将',
            time: 20
        }
    ],
    echartsOpts: [
        {
            title : {
                text: '刘文茗  最擅长销售的品类：',
                x:'left'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                right: '10%',
                top: 'center',
                data: ['眼部彩妆','唇部彩妆','脸部彩妆','套装','眉部彩妆', '其他']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '70%',
                    center: ['35%', '55%'],
                    data:[
                        {value:335, name:'眼部彩妆'},
                        {value:310, name:'唇部彩妆'},
                        {value:234, name:'脸部彩妆'},
                        {value:135, name:'套装'},
                        {value:548, name:'眉部彩妆'},
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
            color: ['rgb(52, 118, 200)', 'rgb(119, 80, 161)', 'rgb(215, 75, 41)', 'rgb(221, 138, 56)', 'rgb(225, 199, 77)', 'rgb(104, 172, 76)']
        },
        {
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c}"
            },
            legend: {
                top: '20',
                data: ['销售额']
            },
            xAxis : [
                {
                    type : 'category',
                    data: ['眼部彩妆','唇部彩妆','脸部彩妆','套装','眉部彩妆', '其他'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : {
                type : 'value',
                axisLabel: {
                    formatter: '¥ {value}.00'
                },
            },
            series : [
                {
                    name: '销售额',
                    type: 'bar',
                    radius : '70%',
                    center: ['35%', '55%'],
                    data:[
                        {value:33500, name:'眼部彩妆'},
                        {value:31000, name:'唇部彩妆'},
                        {value:23004, name:'脸部彩妆'},
                        {value:13005, name:'套装'},
                        {value:54008, name:'眉部彩妆'},
                        {value:54008, name:'其他'}
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
            color: ['rgb(52, 118, 200)', 'rgb(119, 80, 161)', 'rgb(215, 75, 41)', 'rgb(221, 138, 56)', 'rgb(225, 199, 77)', 'rgb(104, 172, 76)']
        },
        {
            title: {
                text: '刘文茗  本年度周排行情况：',
                x:'left'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['销售排名']
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
                data: ['week1','week2','week3','week4','week5','week6','week7','week8','week9','week10','week11','week12','week13','week14','week15']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'销售排名',
                    type:'line',
                    stack: '总量',
                    data: [5,8,13,15,1,3,8,9,17,6,11,2,1,4,1]
                }
            ],
            color: ['rgb(101, 167, 245)']
        },
        {
            tooltip : {
                trigger: 'item',
                formatter: "{b} : {c}"
            },
            legend: {
                top: '20',
                data: ['销售金额']
            },
            xAxis : [
                {
                    type : 'category',
                    data:['week1','week2','week3','week4','week5','week6','week7','week8','week9','week10','week11','week12','week13','week14','week15'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : {
                axisLabel: {
                    formatter: '¥ {value}'
                },
            },
            series : [
                {
                    name: '销售金额',
                    type: 'bar',
                    radius : '70%',
                    center: ['35%', '55%'],
                    data:[3429.35,5486.96,8916.31,10288.05,4285.87,2057.61,5486.96,6172.83,11659.79,4115.22,7544.57,1371.74,6485.87,2743.48,6853.87],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ],
            color: ['rgb(196, 129, 130)']
        }
    ]
}
