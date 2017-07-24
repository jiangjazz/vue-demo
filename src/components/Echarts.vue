<style lang="scss" scoped>
    .u-echarts{
    }
</style>
<template>
    <div class="u-echarts" :class="classes" :id="ids" :style="echartHeight">
    </div>
</template>

<script>
import chinaJson from '@/assets/mapJson/china.js'
const echarts = require('echarts/lib/echarts')
require('echarts')

export default {
    props: {
        classes:{
            default: ''
        },
        options: {
            default() {
                return {
                    title: { text: 'ECharts 入门示例' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            }
        },
        chartHeight: {
            default: 400
        },
        map: {
            default: false
        }
    },
    computed: {
        echartHeight() {
            return 'height:'+this.chartHeight+'px'
        }
    },
    data() {
      return {
            ids: Math.random() + 'echarts'
        }
    },
    mounted() {
        if(this.map) {
            echarts.registerMap('china', chinaJson)
        }
        const myChart = echarts.init(document.getElementById(this.ids))
        myChart.setOption(this.options)
        window.onresize = myChart.resize
    }
}
</script>
