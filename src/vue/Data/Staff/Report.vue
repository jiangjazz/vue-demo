<style lang="scss" scoped>
    .data-staff-report{
        padding: 20px 25px;
        .row-title{
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: bold;
            text-indent: 20px;
        }
        .row{
            margin-top: 20px;
            .col-pad{
                padding: 0 10px;
                &:first-child{
                    padding-left: 0;
                }
                &:last-child{
                    padding-right: 0;
                }
            }
        }
    }
</style>
<template>
    <div class="data-staff-report">
        <div class="f-cb">
            <Button :class="'f-fr'">过去7天</Button>
        </div>

        <div class="row">
            <Row>
                <Col class="col-pad" span="12">
                    <div class="u-box-block">
                        <Echart :options="echartsOpts[0]" :chartHeight="320">
                        </Echart>
                    </div>
                </Col>
                <Col class="col-pad" span="12">
                    <div class="u-box-block">
                        <Echart :map="'china'" :options="echartsOpts[1]" :chartHeight="320">
                        </Echart>
                    </div>
                </Col>
            </Row>
        </div>

        <div class="row u-box-block">
            <div class="row-title">
                最佳销售（Top sales）
            </div>
            <Row>
                <Col span="10">
                    <img :src="staff_1" alt="" height="490" />
                </Col>
                <Col span="14">
                    <Echart :options="echartsOpts[2]" :chartHeight="280" style="margin-bottom:10px">
                    </Echart>
                    <Echart :options="echartsOpts[3]" :chartHeight="200">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="row u-box-block">
            <div class="row-title">
                进步最快的销售
            </div>
            <Row>
                <Col span="10">
                    <img :src="staff_2" alt="" height="321" />
                </Col>
                <Col span="14">
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
