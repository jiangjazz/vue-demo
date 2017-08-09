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
            .item{
                margin-top: 20px;
                width: 33.3333%;
                text-align: center;
                img{
                    width: 75px;
                }
                .name{
                    font-weight: bold;
                    font-size: $f-h5;
                }
                .time{
                    font-size: $f-h5;
                    color: $text-disabled;
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
                <Col span="9">
                    <ul class="f-cb">
                        <li class="item f-fl" v-for="(item, index) in members">
                            <img :src="item.img" />
                            <div class="name">
                                {{ item.name }}
                            </div>
                            <div class="time">
                                {{ item.time }}
                            </div>
                        </li>
                    </ul>
                    <!-- <img :src="staff_1" alt="" height="490" /> -->
                </Col>
                <Col span="1">
                    &nbsp;
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
                <Col span="9">
                    <ul class="f-cb">
                        <li class="item f-fl" v-for="(item, index) in members" v-if="index > 3 && index < 7">
                            <img :src="item.img" />
                            <div class="name">
                                {{ item.name }}
                            </div>
                            <div class="time">
                                {{ item.time }}
                            </div>
                        </li>
                    </ul>
                    <!-- <img :src="staff_2" alt="" height="321" /> -->
                </Col>
                <Col span="1">
                    &nbsp;
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
// import staff_1 from '@/assets/data/staff_1.png'
// import staff_2 from '@/assets/data/staff_2.png'
import home_member1 from '@/assets/home/home_member1.png'
import home_member2 from '@/assets/home/home_member2.png'
import home_member3 from '@/assets/home/home_member3.png'
import home_member4 from '@/assets/home/home_member4.png'
import home_member5 from '@/assets/home/home_member5.png'
import home_member6 from '@/assets/home/home_member6.png'
import home_member7 from '@/assets/home/home_member7.png'
import home_member8 from '@/assets/home/home_member8.png'
import home_member9 from '@/assets/home/home_member9.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/dataStaff.js'

export default {
    name: 'dataStaffReport',
    components: {
        Echart
    },
    data() {
        return {
            // staff_1,
            // staff_2,
            members: [
                {
                    img: home_member1,
                    name: 'Ned',
                    time: '今天'
                },
                {
                    img: home_member2,
                    name: 'Robert',
                    time: '昨天'
                },
                {
                    img: home_member3,
                    name: 'Jaime',
                    time: '昨天'
                },
                {
                    img: home_member4,
                    name: 'Sansa',
                    time: '7-24'
                },
                {
                    img: home_member5,
                    name: 'Deanerys',
                    time: '7-18'
                },
                {
                    img: home_member6,
                    name: 'Theon',
                    time: '7-8'
                },
                {
                    img: home_member7,
                    name: 'Tyrion',
                    time: '6-18'
                },
                {
                    img: home_member8,
                    name: 'Mellisandre',
                    time: '6-3'
                },
                {
                    img: home_member9,
                    name: 'Khal',
                    time: '6-1'
                }
            ],

            echartsOpts: datas.echartsOpts
        }
    }
}
</script>
