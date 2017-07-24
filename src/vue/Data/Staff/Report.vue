<style lang="scss" scoped>
    .data-staff-report{
        padding: 20px 25px;
        .row-title{
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: bold;
        }
        .row1{
            margin-top: 20px;
            padding: 20px 30px;
            background: #ffffff;
            border-top: 5px solid rgb(243, 157, 57);
        }
        .row2{
            margin-top: 30px;
            padding: 20px 30px;
            background: #ffffff;
            border-top: 5px solid rgb(239, 113, 152);
        }
        .row3{
            margin-top: 30px;
            padding: 20px 30px;
            background: #ffffff;
            border-top: 5px solid rgb(71, 163, 98);
        }
    }
</style>
<template>
    <div class="data-staff-report">
        <div class="f-cb">
            <Button :class="'f-fr'">过去7天</Button>
        </div>

        <div class="row1">
            <div class="row-title">
                热销门店统计
            </div>
            <Row>
                <Col span="11">
                    <Echart :options="echartsOpts[0]" :chartHeight="320">
                    </Echart>
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <Echart :map="'china'" :options="echartsOpts[1]" :chartHeight="320">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="row2">
            <div class="row-title">
                最佳销售（Top sales）
            </div>
            <Row>
                <Col span="11">
                    <img :src="staff_1" alt="" height="321" />
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <Echart :options="echartsOpts[2]" :chartHeight="200" style="margin-bottom:10px">
                    </Echart>
                    <Echart :options="echartsOpts[3]" :chartHeight="140">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="row3">
            <div class="row-title">
                进步最快的销售
            </div>
            <Row>
                <Col span="11">
                    <img :src="staff_2" alt="" height="321" />
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <Echart :options="echartsOpts[4]" :chartHeight="320">
                    </Echart>
                </Col>
            </Row>
        </div>

    </div>
</template>
<script>
import staff_1 from '@/assets/data/staff_1.png'
import staff_2 from '@/assets/data/staff_2.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/dataStaff.js'

export default {
    name: 'dataStaffReport',
    components: {
        Echart
    },
    data() {
        return {
            staff_1,
            staff_2,

            echartsOpts: datas.echartsOpts
        }
    }
}
</script>
