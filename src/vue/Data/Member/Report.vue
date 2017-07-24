<style lang="scss" scoped>
    .data-member-report{
        padding: 20px 25px;
        .row-title{
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: bold;
        }
        .types{
            margin-bottom: 20px;
            img{
                width: 100%;
            }
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
    <div class="data-member-report">
        <div class="f-cb">
            <Button :class="'f-fr'">过去7天</Button>
        </div>
        <div class="row1">
            <div class="row-title">
                会员与粉丝增长情况
            </div>
            <Row>
                <Col span="11">
                    <Row class="types">
                        <Col span="7">
                            <img :src="member_1" height="78" />
                        </Col>
                        <Col span="1">&nbsp;</Col>
                        <Col span="7">
                            <img :src="member_2" height="78" />
                        </Col>
                        <Col span="1">&nbsp;</Col>
                        <Col span="7">
                            <img :src="member_3" height="78" />
                        </Col>
                    </Row>
                    <Echart :options="echartsOpts[0]" :chartHeight="290">
                    </Echart>
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <Echart :options="echartsOpts[1]" :chartHeight="400">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="row2">
            <div class="row-title">
                高影响力会员（KOL）
            </div>
            <Row>
                <Col span="11">
                    <img :src="member_users" height="290" />
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <Echart :options="echartsOpts[2]" :chartHeight="290">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="row3">
            <div class="row-title">
                会员对订单影响分析
            </div>
            <Row>
                <Col span="11">
                    <Echart :options="echartsOpts[3]" :chartHeight="290">
                    </Echart>
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <Echart :options="echartsOpts[4]" :chartHeight="290">
                    </Echart>
                </Col>
            </Row>
        </div>

    </div>
</template>
<script>
import member_1 from '@/assets/data/member_1.png'
import member_2 from '@/assets/data/member_2.png'
import member_3 from '@/assets/data/member_3.png'
import member_users from '@/assets/data/member_users.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/dataMemberReport.js'

export default {
    name: 'dataMemberReport',
    components: {
        Echart
    },
    data() {
        return {
            member_1,
            member_2,
            member_3,
            member_users,
            echartsOpts: datas.echartsOpts
        }
    }
}
</script>
