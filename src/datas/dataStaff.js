function randomData() {
    return Math.round(Math.random()*1000);
}

export default {
    echartsOpts: [
        {
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
                width: '90%',
                top: '80',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    formatter: '¥{value}.00'
                }
            },
            yAxis: {
                type: 'category',
                data: ['杭州大厦A','北京SKP','北京汉光','北京太古里','长沙王府进','广州正佳专卖店', '杭州银泰', '南京大洋', '上海久光']
            },
            series: [
                {
                    name: '销售金额',
                    type: 'bar',
                    data: [91820, 82348, 72903, 60470, 57174, 53030, 40322, 20131, 10238]
                }
            ],
            color: ['rgb(69, 136, 215)']
        },
        {
            title: {
                text: '各省市门店销售额概览',
                left: 'left'
            },
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                min: 0,
                max: 800,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '邮件',
                    type: 'map',
                    mapType: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {name: '北京',value: randomData() },
                        {name: '天津',value: randomData() },
                        {name: '上海',value: randomData() },
                        {name: '重庆',value: randomData() },
                        {name: '河北',value: randomData() },
                        {name: '河南',value: randomData() },
                        {name: '云南',value: randomData() },
                        {name: '辽宁',value: randomData() },
                        {name: '黑龙江',value: randomData() },
                        {name: '湖南',value: randomData() },
                        {name: '安徽',value: randomData() },
                        {name: '山东',value: randomData() },
                        {name: '新疆',value: randomData() },
                        {name: '江苏',value: randomData() },
                        {name: '浙江',value: randomData() },
                        {name: '江西',value: randomData() },
                        {name: '湖北',value: randomData() },
                        {name: '广西',value: randomData() },
                        {name: '甘肃',value: randomData() },
                        {name: '山西',value: randomData() },
                        {name: '内蒙古',value: randomData() },
                        {name: '陕西',value: randomData() },
                        {name: '吉林',value: randomData() },
                        {name: '福建',value: randomData() },
                        {name: '贵州',value: randomData() },
                        {name: '广东',value: randomData() },
                        {name: '青海',value: randomData() },
                        {name: '西藏',value: randomData() },
                        {name: '四川',value: randomData() },
                        {name: '宁夏',value: randomData() },
                        {name: '海南',value: randomData() },
                        {name: '台湾',value: randomData() },
                        {name: '香港',value: randomData() },
                        {name: '澳门',value: randomData() }
                    ]
                }
            ]
        },
        {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 10,
                data: ['满意度']
            },
            grid: {
                width: '90%',
                top: '30',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    formatter: '{value}%'
                },
                max: 100
            },
            yAxis: {
                type: 'category',
                data: ['刘文茗','岳并润','刘荡诺','李义征','庄　宁','梁端樵', '朱莱毅', 'Nadia']
            },
            series: [
                {
                    name: '满意度',
                    type: 'bar',
                    data: [91, 82, 93, 70, 74, 80, 100, 99]
                }
            ],
            color: ['rgb(83, 124, 52)']
        },
        {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                top: 10,
                data: ['满意度']
            },
            grid: {
                width: '90%',
                top: '30',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                axisLabel: {
                    formatter: '¥ {value}.00'
                }
            },
            xAxis: {
                type: 'category',
                data: ['刘文茗','岳并润','刘荡诺','李义征','庄　宁','梁端樵', '朱莱毅', 'Nadia']
            },
            series: [
                {
                    name: '满意度',
                    type: 'bar',
                    data: [110000, 101821, 98988, 86000, 75000, 57900, 46000, 30121]
                }
            ],
            color: ['rgb(212, 165, 91)']
        },
        {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['营销额','营销额（上个周期）']
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
                data: ['郑尔阳','沈思佳','刘   诺','张心语','陈高义','张心语','王元凯','李芷琪','沈思佳']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'营销额',
                    type:'line',
                    data:[11286,11000,10472,10252,9988,9284,9064,8932,8812]
                },
                {
                    name:'营销额（上个周期）',
                    type:'line',
                    data:[2257.20,2640.00,3141.60,3280.64,3296.04,3249.40,3806.88,3930.08,2812.01]
                }
            ],
            color: ['rgb(102, 167, 246)', 'rgb(174, 226, 135)']
        }
    ]
}
