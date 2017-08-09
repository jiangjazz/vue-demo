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
            .img_ct{
                &:nth-child(1){
                    padding: 0 10px 0 0;
                }
                &:nth-child(2){
                    padding: 0 5px 0 5px;
                }
                &:nth-child(3){
                    padding: 0 0 0 10px;
                }
            }
            img{
                width: 100%;
            }
        }
        .row1{
            margin-top: 20px;
            padding: 20px 30px;
            background: #ffffff;
        }
        .row2{
            margin-top: 30px;
            padding: 20px 30px;
            background: #ffffff;
            .item{
                margin-top: 20px;
                width: 25%;
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
        .row3{
            margin-top: 30px;
            padding: 20px 30px;
            background: #ffffff;
        }
    }
    .barCt{
        padding: 0 10px;
        height: 65px;
        color: $white;
        text-align: right;
        line-height: 65px;
        font-size: $f-h5;
        .name{
            display: inline;
            font-size: $f-h4;
            line-height: 65px;
            vertical-align: middle;
        }
        .total{
            display: inline;
            margin-left: 60px;
            font-size: 40px;
            vertical-align: middle;
        }
        .percent{
            display: inline-block;
            margin-left: 15px;
            padding: 0 8px;
            height: 1.5em;
            line-height: 1.5em;
            background: rgba($white, .3);
            @include border-radius(.75em);
            &.red{
                color: $red;
            }
            &.green{
                color: $green;
            }
        }
    }
</style>
<template>
    <div class="data-member-report">
        <div class="f-cb">
            <Button class="main f-fr">过去7天</Button>
        </div>
        <div class="row1 u-box-block">
            <div class="row-title">
                会员与粉丝增长情况
            </div>
            <Row class="types">
                <Col class="img_ct" span="8">
                    <div class="barCt" :style="style_1">
                        <div class="situation">
                            <div class="name">非会员</div>
                            <div class="total">569</div>
                            <div class="percent red">
                                15%
                                <Icon type="arrow-up-c"></Icon>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col class="img_ct" span="8">
                    <div class="barCt" :style="style_2">

                        <div class="situation">
                            <div class="name">新会员</div>
                            <div class="total">37</div>
                            <div class="percent">
                                0%
                                <Icon type="minus-round"></Icon>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col class="img_ct" span="8">
                    <div class="barCt" :style="style_3">

                        <div class="situation">
                            <div class="name">新粉丝</div>
                            <div class="total">104</div>
                            <div class="percent green">
                                5%
                                <Icon type="arrow-down-c"></Icon>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span="11">
                    <Echart :options="echartsOpts[0]" :chartHeight="290">
                    </Echart>
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <Echart :options="echartsOpts[1]" :chartHeight="290">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="row2 u-box-block">
            <div class="row-title">
                高影响力会员
            </div>
            <Row>
                <Col span="11">
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
                    <!-- <img :src="member_users" height="290" /> -->
                </Col>
                <Col span="2">&nbsp;</Col>
                <Col span="11">
                    <Echart :options="echartsOpts[2]" :chartHeight="290">
                    </Echart>
                </Col>
            </Row>
        </div>

        <div class="row3 u-box-block">
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
import home_member1 from '@/assets/home/home_member1.png'
import home_member2 from '@/assets/home/home_member2.png'
import home_member3 from '@/assets/home/home_member3.png'
import home_member4 from '@/assets/home/home_member4.png'
import home_member5 from '@/assets/home/home_member5.png'
import home_member6 from '@/assets/home/home_member6.png'
import home_member7 from '@/assets/home/home_member7.png'
import home_member8 from '@/assets/home/home_member8.png'
// import member_users from '@/assets/data/member_users.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/dataMemberReport.js'

export default {
    name: 'dataMemberReport',
    components: {
        Echart
    },
    data() {
        return {
            /**
            * 这里都是图片
            */
            style_1: {
                backgroundImage: `url(${member_1})`,
                backgroundSize: `100% 100%`
            },
            style_2: {
                backgroundImage: `url(${member_2})`,
                backgroundSize: `100% 100%`
            },
            style_3: {
                backgroundImage: `url(${member_3})`,
                backgroundSize: `100% 100%`
            },
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
                }
            ],
            // member_users,
            echartsOpts: datas.echartsOpts
        }
    }
}
</script>
