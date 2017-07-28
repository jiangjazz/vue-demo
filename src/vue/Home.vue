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
        img{
            display: inline-block;
            margin:auto;
            max-width: 100%;
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
                <img :src="home_1" width="100%" alt="">
            </Col>
            <Col span="6" style="padding: 0 10px;">
                <img :src="home_2" width="100%" alt="">
            </Col>
            <Col span="6" style="padding: 0 10px;">
                <img :src="home_3" width="100%" alt="">
            </Col>
            <Col span="6" style="padding: 0 10px;">
                <img :src="home_4" width="100%" alt="">
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
                    <img :src="home_member" alt="" width="100%" height="400" />
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
import home_member from '@/assets/home/home_member.png'

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
            home_1,
            home_2,
            home_3,
            home_4,
            home_member,

            echartsOpts: datas.echartsOpts
        }
    },
    mounted() {
        console.log(datas)
    }
}
</script>
