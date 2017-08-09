<style lang="scss" scoped>
    .topTitle{
        padding: 30px 30px 20px 30px;
        background: $white;
        .title{
            font-weight: bold;
            font-size: $f-h2;
        }
        .ivu-btn{
            width: 80px;
        }
    }
    .echart1{
        padding: 10px;
        background: #ffffff;
    }
    .echart2{
        padding: 10px;
        background: #ffffff;
    }
    .echart3{
        padding: 10px;
        background: #ffffff;
    }
    .echart4{
        padding: 10px;
        background: #ffffff;
    }
    .echart5{
        padding: 10px;
        background: #ffffff;
    }
    .echart6{
        padding: 10px;
        height: 420px;
        background: #ffffff;
        .title{
            padding: 0 0 10px 0;
            font-size: $f-h4;
            font-weight: bold;
            color: $text-important;
        }
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
    .barCt{
        padding: 0 10px;
        height: 120px;
        color: $white;
        text-align: right;
        .total{
            font-size: 40px;
            line-height: 2em;
        }
        .situation{
            font-size: $f-h5;
            .percent{
                display: inline-block;
                margin-left: 8px;
                padding: 0 8px;
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
    }
</style>
<template>
    <div class="home">

        <div class="f-cb topTitle" style="paddingBottom: 10px">
            <span class="title">首页</span>
            <Button-group class="f-fr">
                <Button type="success">昨天</Button>
                <Button>最近七天</Button>
                <Button>最近一月</Button>
            </Button-group>
        </div>


        <Row style="padding: 20px;">
            <Col span="6" style="padding: 0 10px;">
                <div class="barCt" :style="style_1">
                    <div class="total">
                        569
                    </div>
                    <div class="situation">
                        线下销售
                        <div class="percent red">
                            15%
                            <Icon type="arrow-up-c"></Icon>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span="6" style="padding: 0 10px;">
                <div class="barCt" :style="style_2">
                    <div class="total">
                        82
                    </div>
                    <div class="situation">
                        线上销售
                        <div class="percent red">
                            15%
                            <Icon type="arrow-up-c"></Icon>
                        </div>
                    </div>
                </div>
            </Col>
            <Col span="6" style="padding: 0 10px;">
                <div class="barCt" :style="style_3">
                    <div class="total">
                        37
                    </div>
                    <div class="situation">
                        新会员
                        <div class="percent">
                            0%
                        </div>
                    </div>
                </div>
            </Col>
            <Col span="6" style="padding: 0 10px;">
                <div class="barCt" :style="style_4">
                    <div class="total">
                        104
                    </div>
                    <div class="situation">
                        新粉丝
                        <div class="percent green">
                            5%
                            <Icon type="arrow-down-c"></Icon>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

        <Row style="padding: 15px 20px;">
            <Col span="12" style="padding: 0 10px;">
                <div class="echart1 u-box-block">
                    <Echart :options="echartsOpts[0]">
                    </Echart>
                </div>
            </Col>
            <Col span="12" style="padding: 0 10px;">
                <div class="echart2 u-box-block">
                    <Echart :options="echartsOpts[1]">
                    </Echart>
                </div>
            </Col>
        </Row>

        <Row style="padding: 15px 20px;">
            <Col span="12" style="padding: 0 10px;">
                <div class="echart3 u-box-block">
                    <Echart :options="echartsOpts[2]">
                    </Echart>
                </div>
            </Col>
            <Col span="12" style="padding: 0 10px;">
                <div class="echart4 u-box-block">
                    <Echart :options="echartsOpts[3]">
                    </Echart>
                </div>
            </Col>
        </Row>

        <Row style="padding: 15px 20px;">
            <Col span="12" style="padding: 0 10px;">
                <div class="echart5 u-box-block">
                    <Echart :options="echartsOpts[4]">
                    </Echart>
                </div>
            </Col>
            <Col span="12" style="padding: 0 10px;">
                <div class="echart6 u-box-block">
                    <div class="title">
                        高影响力会员
                    </div>
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
                </div>
            </Col>
        </Row>

    </div>
</template>

<script>
import home_1 from '@/assets/home/home_1.png'
import home_2 from '@/assets/home/home_2.png'
import home_3 from '@/assets/home/home_3.png'
import home_4 from '@/assets/home/home_4.png'
import home_member1 from '@/assets/home/home_member1.png'
import home_member2 from '@/assets/home/home_member2.png'
import home_member3 from '@/assets/home/home_member3.png'
import home_member4 from '@/assets/home/home_member4.png'
import home_member5 from '@/assets/home/home_member5.png'
import home_member6 from '@/assets/home/home_member6.png'
import home_member7 from '@/assets/home/home_member7.png'
import home_member8 from '@/assets/home/home_member8.png'
// import home_member9 from '@/assets/home/home_member9.png'

import Echart from '@/components/Echarts.vue'

import datas from '@/datas/home.js'

export default {
    replace: false,
    name: 'home',
    components: {
        Echart
    },
    data() {
        return {
            /**
            * 这里都是图片
            */
            style_1: {
                backgroundImage: `url(${home_1})`,
                backgroundSize: `100% 100%`
            },
            style_2: {
                backgroundImage: `url(${home_2})`,
                backgroundSize: `100% 100%`
            },
            style_3: {
                backgroundImage: `url(${home_3})`,
                backgroundSize: `100% 100%`
            },
            style_4: {
                backgroundImage: `url(${home_4})`,
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

            echartsOpts: datas.echartsOpts
        }
    },
    mounted() {
        console.log(datas)
    }
}
</script>
