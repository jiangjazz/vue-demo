<style lang="scss" scoped>
    .data-order-report{
        padding: 20px 25px;
        .row1{
            margin-top: 20px;
            padding: 30px;
            background: $white;
        }
        .row2{
            margin-top: 30px;
            padding: 30px;
            background: $white;
        }
        .row3{
            margin-top: 30px;
            background: $bg-content;
        }
        .pie1{
            padding: 0 10px 0 0;
        }
        .pie2{
            padding: 0 10px;
        }
        .pie3{
            padding: 0 0 0 10px;
        }
    }
</style>
<template>
    <div class="data-order-report">
        <div class="f-cb">
            <Button class="main f-fr">过去7天</Button>
        </div>

        <div class="row1 u-box-block">
            <div style="margin-bottom: 20px;">
                <Echart :options="echartsOpts[0]">
                </Echart>
            </div>
            <Row>
                <Col span="14">
                    <Echart :options="echartsOpts[1]" :chartHeight="200">
                    </Echart>
                </Col>
                <Col span="1">&nbsp;</Col>
                <Col span="9">
                    <Echart :options="echartsOpts[2]" :chartHeight="200">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="row2 u-box-block">
            <div style="margin-bottom: 20px;">
                <Echart :options="echartsOpts[3]">
                </Echart>
            </div>
            <Row>
                <Col span="14">
                    <Echart :options="echartsOpts[4]" :chartHeight="200">
                    </Echart>
                </Col>
                <Col span="1">&nbsp;</Col>
                <Col span="8">
                    <Echart :options="echartsOpts[5]" :chartHeight="200">
                    </Echart>
                </Col>
            </Row>
        </div>


        <Row class="row3">
            <Col class="pie1" span="8">
                <div class="u-box-block">
                    <Echart :options="echartsOpts[6]">
                    </Echart>
                </div>
            </Col>
            <Col class="pie2" span="8">
                <div class="u-box-block">
                    <Echart :options="echartsOpts[7]">
                    </Echart>
                </div>
            </Col>
            <Col class="pie3" span="8">
                <div class="u-box-block">
                    <Echart :options="echartsOpts[8]">
                    </Echart>
                </div>
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
