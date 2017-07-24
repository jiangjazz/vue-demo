<style lang="scss" scoped>
    .data-order-report{
        padding: 20px 25px;
        .row1{
            margin-top: 20px;
            padding: 30px;
            background: #ffffff;
            border-top: 5px solid rgb(111, 182, 133);
        }
        .row2{
            margin-top: 30px;
            padding: 30px;
            background: #ffffff;
            border-top: 5px solid rgb(72, 165, 99);
        }
        .row3{
            margin-top: 30px;
            padding: 30px;
            background: #ffffff;
        }
        .pie1{
            border-top: 5px solid rgb(58, 125, 205);
        }
        .pie2{
            border-top: 5px solid rgb(247, 159, 58);
        }
        .pie3{
            border-top: 5px solid rgb(110, 200, 156);
        }
    }
</style>
<template>
    <div class="data-order-report">
        <div class="f-cb">
            <Button :class="'f-fr'">过去7天</Button>
        </div>

        <Row class="row1">
            <Col span="11">
                <Echart :options="echartsOpts[0]">
                </Echart>
            </Col>
            <Col span="2">&nbsp;</Col>
            <Col span="11">
                <Echart :options="echartsOpts[1]" :chartHeight="190">
                </Echart>
                <Echart :options="echartsOpts[2]" :chartHeight="190" style="marginTop: 20px">
                </Echart>
            </Col>
        </Row>

        <Row class="row2">
            <Col span="11">
                <Echart :options="echartsOpts[3]">
                </Echart>
            </Col>
            <Col span="2">&nbsp;</Col>
            <Col span="11">
                <Echart :options="echartsOpts[4]" :chartHeight="190">
                </Echart>
                <Echart :options="echartsOpts[5]" :chartHeight="190" style="marginTop: 20px">
                </Echart>
            </Col>
        </Row>

        <Row class="row3">
            <Col class="pie1" span="7">
                <Echart :options="echartsOpts[6]">
                </Echart>
            </Col>
            <Col span="1">&nbsp;</Col>
            <Col class="pie2" span="7">
                <Echart :options="echartsOpts[7]">
                </Echart>
            </Col>
            <Col span="1">&nbsp;</Col>
            <Col class="pie3" span="7">
                <Echart :options="echartsOpts[8]">
                </Echart>
            </Col>
        </Row>

    </div>
</template>
<script>

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/dataOrder.js'

export default {
    name: 'dataOrderReport',
    components: {
        Echart
    },
    data() {
        return {
            echartsOpts: datas.echartsOpts
        }
    }
}
</script>
